import React from 'react';

const Blog = () => {
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        
        <div className='max-w-screen-xl sm:mx-auto'>
          <div className='grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2'>
            <div className='space-y-8'>
              <div>
                <p className='mb-4 text-xl font-medium'>
                What is the purpose of react router?
                </p>
                <p className='text-gray-700'>
                React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. Let us create a simple application to React to understand how the React Router works. 
                  <br />
                  <br />
                  The application will contain three components: the home component, the about a component, and the contact component. We will use React Router to navigate between these components.  Setting up the React Application: Create a React application using create-react-app and let us call it geeks.
                </p>
              </div>

              

              <div>
                <p className='mb-4 text-xl font-medium'>
                  What is useref hook?
                </p>
                <p className='text-gray-700'>
                The useRef Hook allows you to persist values between renders.

                 It can be used to store a mutable value that does not cause a re-render when updated.

                 It can be used to access a DOM element directly.
                 <br /><br />
                 useRef is one of the standard hooks provided by React. It will return an object that you can use during the whole lifecycle of the component. 

                  The main use case for the useRef hook is to access a DOM child directly. 

                </p>
              </div>
            </div>


            <div className='space-y-8'>
              <div>
                <p className='mb-4 text-xl font-medium'>
                   How does context API works?
                </p>
                <p className='text-gray-700'>
                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                  <br />
                  <br />
                  React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. 
                </p>
              </div>

              
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default Blog;