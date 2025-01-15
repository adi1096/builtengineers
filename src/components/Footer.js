import React from 'react';
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>

        <section className='mb-4'>
          <p>
            Contact us and book a consultation today! <br />
          </p>
        </section>
      </MDBContainer>
    </MDBFooter>
  );
}
