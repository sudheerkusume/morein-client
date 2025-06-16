import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/cartContext'
import { Link } from 'react-router-dom'
// const Candies = () => {
//   const [Products, setProducts] = useState([]);
//   const scrollRef = useRef(null);
//   const navigate = useNavigate();
//   const {addToCart} = useCart();

//   useEffect(() =>https://more-server.onrender.com/")
//     .then((res) => setProducts(res.data))
//     .catch((err) => console.log(err))
//   },[]);

//   const scroll = (direction) => {
//     const scrollAmount = 1000;
//     if(direction === 'left'){
//       scrollRef.current.scrollLeft -= scrollAmount;
//     } else{
//       scrollRef.current.scrollLeft += scrollAmount;
//     }
//   };
//   return (
//        <div className="container-fluid py-4 px-5 position-relative" >
//       <div className="d-flex align-items-center justify-content-between mb-3">
//         <h4 className="mb-0 text-dark">Cold Drinks & Juices</h4>
//         <span className="text-success" style={{ cursor: 'pointer' }} onClick={()=> navigate('/Candies')}>see all</span>
//       </div>

//       {/* Scroll Buttons */}
//       <button
//         className="btn btn-light position-absolute top-50 start-0 translate-middle-y"
//         onClick={() => scroll('left')}
//         style={{ zIndex: 1 }}
//       >
//         <FaChevronLeft />
//       </button>
//       <button
//         className="btn btn-light position-absolute top-50 end-0 translate-middle-y"
//         onClick={() => scroll('right')}
//         style={{ zIndex: 1 }}
//       >
//         <FaChevronRight />
//       </button>

//       {/* Horizontal Scrollable Row */}
//       <div
//         className="d-flex overflow-auto gap-3 pb-2 scroll-container"
//         ref={scrollRef}
//         style={{ scrollBehavior: 'smooth', padding: '10px 0' }}
        
//       >
//           {Products.map((product, index) => (
//   <Link
//     to={`/Candies/${product.id}`} 
//     style={{ textDecoration: 'none', color: 'inherit' }}
//   >
//     <div className="card h-100" style={{ minWidth: '170px', flex: '0 0 auto' }}>
//       <img
//         className="card-img-top h-100"
//         src={product.image}
//         alt={product.title}
//         style={{ height: '100px', objectFit: 'contain' }}
//       />
//       <div className="card-body p-2">
//         <h6 className="card-title" style={{ fontSize: '15px', fontWeight: '500' }}>
//           {(product.title || '').length > 30 ? (product.title || '').slice(0, 30) + '...' : (product.title || '')}
//         </h6>
//         <p style={{ color: 'gray', fontSize: '13px' }}>{product.Size}</p>
//         <p className="card-text mb-1">
//           <strong>₹</strong>{product.Offer}
//         </p>
//         <button
//           className="btn btn-outline-success btn-sm w-100"
//           onClick={(e) => {
//             e.preventDefault();
//             e.stopPropagation();
//             addToCart(product);
//           }}
//         >
//           ADD
//         </button>
//       </div>
//     </div>
//   </Link>
// ))}
//       </div>
//     </div>
//   )
// }
const Candies = () => {
  const [Products, setProducts] = useState([]);
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const {addToCart} = useCart();

  useEffect(() => {
    axios.get("https://more-server.onrender.com/Candies")
    .then((res) => setProducts(res.data))
    .catch((err) => console.log(err))
  },[]);

  const scroll = (direction) => {
    const scrollAmount = 1000;
    if(direction === 'left'){
      scrollRef.current.scrollLeft -= scrollAmount;
    } else{
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };
  return (
       <div className="container-fluid py-4 px-5 position-relative" >
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h4 className="mb-0 text-dark">Snacks & Munchies</h4>
        <span className="text-success" style={{ cursor: 'pointer' }}onClick={()=> navigate('/Snacks')}
>see all</span>
      </div>

      {/* Scroll Buttons */}
      <button
        className="btn btn-light position-absolute top-50 start-0 translate-middle-y"
        onClick={() => scroll('left')}
        style={{ zIndex: 1 }}
      >
        <FaChevronLeft />
      </button>
      <button
        className="btn btn-light position-absolute top-50 end-0 translate-middle-y"
        onClick={() => scroll('right')}
        style={{ zIndex: 1 }}
      >
        <FaChevronRight />
      </button>

      {/* Horizontal Scrollable Row */}
      <div
  className="d-flex overflow-auto gap-3 pb-2 scroll-container"
  ref={scrollRef}
  style={{ scrollBehavior: 'smooth', padding: '10px 0' }}
>
  {Array.isArray(Products) &&Products.map((product) => (
    <Link
      to={`/Candies/${product._id}`}
      key={product._id}
      style={{ textDecoration: 'none', color: 'inherit', minWidth: '170px' }}
    >
      <div className="card h-100" style={{ width: '170px' }}>
        {/* Image with proper handling for array/string URLs */}
        <div style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            className="card-img-top"
            src={Array.isArray(product.image) ? product.image[0] : product.image}
            alt={product.title}
            style={{ 
              maxHeight: '100%', 
              maxWidth: '100%',
              objectFit: 'contain'
            }}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/150'; // Fallback image
            }}
          />
        </div>

        <div className="card-body p-2 d-flex flex-column">
          {/* Single-line truncated title */}
          <h6 
            className="card-title m-0" 
            style={{ 
              fontSize: '15px', 
              fontWeight: '500',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {product.title}
          </h6>
          
          <p className="mt-1 mb-1" style={{ color: 'gray', fontSize: '13px' }}>
            {product.Size}
          </p>
          
          <p className="card-text mb-2">
            <strong>₹</strong>{product.Offer}
          </p>
          
          <button
            className="btn btn-outline-success btn-sm mt-auto"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product);
            }}
          >
            ADD
          </button>
        </div>
      </div>
    </Link>
  ))}
</div>
    </div>
  )
}

export default Candies;