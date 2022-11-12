import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../../contexts/ProductContextProvider';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import '../ProductDetails/ProductDetails.css';

export default function ProductDetails() {
  const { oneProduct, getOneProduct } = useProducts();

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  return (
    <>
      {oneProduct ? (
        <div
          style={{
            width: '75%',
            color: '#999999',
            padding: '20px 0',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <div style={{ backgroundColor: '#101011', borderRadius: '20px' }}>
              <img src={oneProduct.image.main} alt="image" />
            </div>
            <div style={{ width: '25%' }}>
              <h4 style={{ textAlign: 'center', fontSize: '25px' }}>
                {oneProduct.title}
              </h4>
              <p
                style={{
                  fontWeight: '700',
                  fontSize: '18px',
                  marginBottom: '45px',
                }}
              >
                {oneProduct.description}
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  backgroundColor: '#101011',
                  borderTopLeftRadius: '20px',
                  borderTopRightRadius: '20px',
                  fontWeight: '700',
                }}
              >
                <div>
                  <p style={{ fontSize: '20px' }}>Height</p>
                  <p style={{ textAlign: 'center' }}>{oneProduct.height}</p>
                </div>
                <div>
                  <p style={{ fontSize: '20px' }}>Category</p>
                  <p style={{ textAlign: 'center' }}>
                    {oneProduct.category[0].toUpperCase() +
                      oneProduct.category.slice(1)}
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  backgroundColor: '#101011',
                  borderBottomLeftRadius: '20px',
                  borderBottomRightRadius: '20px',
                  fontWeight: '700',
                }}
              >
                <div>
                  <p style={{ fontSize: '20px' }}>Weight</p>
                  <p style={{ textAlign: 'center' }}>{oneProduct.weight}</p>
                </div>
                <div
                  style={{
                    textAlign: 'center',
                  }}
                >
                  <p style={{ fontSize: '20px' }}>Abilities</p>
                  <p style={{ display: 'flex', alignItems: 'center' }}>
                    {oneProduct.abilities}
                    <HelpOutlineIcon className="help-icon" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4 style={{ color: '#999999' }}>Loading...</h4>
      )}
    </>
  );
}
