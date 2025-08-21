import React, { useEffect, useState } from 'react'
import Container from '../Container'
import ProductBox from '../ProductBox';
import { useSearch } from '../../context/SearchContext';
import { useLoader } from '../../context/LoaderContext';
import localProducts from '../../data/products.json';

const Pages = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const { searchQuery, setSearchQuery } = useSearch();
  const { setLoading } = useLoader();

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.in/api/products')
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data.products)) {
          setProducts([...data.products, ...localProducts]);
        } else {
          setProducts(localProducts);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Product error", err);
        setProducts(localProducts);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.in/api/products/category')
      .then(res => res.json())
      .then(data => {
        console.log("Fetched categories:", data);
        if (Array.isArray(data.categories)) {
          setCategories(data.categories);
        } else {
          console.error('Category array not found in response:', data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching categories:', err);
        setLoading(false);
      });
  }, []);

  return (
    <Container className='grid grid-cols-1 md:grid-cols-4 gap-5 my-5'>

      <div className="block md:hidden mb-4 px-2">
        <select
          value={selectedCategory || ''}
          onChange={(e) => {
            setSelectedCategory(e.target.value || null);
            setCurrentPage(1);
          }}
          className="w-full border rounded px-3 py-2 text-sm"
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="md:col-span-1 sticky top-16 h-fit bg-white border rounded-lg shadow-sm p-4 hidden md:block">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Categories</h2>
        <div className="flex flex-col gap-3">

          <button
            onClick={() => {
              setSelectedCategory(null);
              setCurrentPage(1);
              setSearchQuery("");
            }}
            className={`transition px-4 py-2 rounded text-sm font-medium capitalize cursor-pointer
                   ${selectedCategory === null
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"}`}
          >
            All
          </button>


          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
                setSearchQuery("");
              }}
              className={`transition px-4 py-2 rounded text-sm font-medium capitalize cursor-pointer 
                     ${selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>


      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:col-span-3 gap-2 sm:gap-6 my-5'>
        {currentProducts.length > 0 ? (
          <ProductBox products={currentProducts} />
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No products found for "{searchQuery}"
          </p>
        )}
      </div>

      <div className="col-span-full flex justify-center mt-6 w-full">
        <div className="flex gap-2">
          {
            [...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentPage(index + 1);
                  window.scrollTo(0, 0);
                }}

                className={`px-3 py-1 rounded border text-sm ${currentPage === index + 1
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-100"
                  }`}
              >
                {index + 1}
              </button>
            ))
          }
        </div>
      </div>


    </Container>
  )
}

export default Pages