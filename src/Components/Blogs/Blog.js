import React from 'react'
import useTitle from '../../Hooks/useHooks';

function Blog() {

    useTitle('Blogs')

  return (
    <div className='mx-[10%] my-20'>
        <h2 className='text-[30px] font-bold text-[#270000] Yeseva'>Welcome to Royal Foodies  </h2>
        <p className='text-xl mt-3 Roboto'>Have a look to our latest Blogs : </p>

        <div className="flex justify-center ">
            <div className='mt-10 mx-10 flex gap-10 flex-wrap'>
                <div className="max-w-[450px] border p-4 rounded">
                    <h2 className='text-[25px] font-semibold'>Difference between SQL and NoSQL</h2>
                    <p className='text-gray-600 mt-5'>
                    SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL
                    <br />
                    NoSQL doesn't support relations between data types. Running queries in NoSQL is doable, but much slower. You have a high transaction application. SQL databases are a better fit for heavy duty or complex transactions because it's more stable and ensure data integrity.
                    </p>
                </div>

                <div className="max-w-[450px] border p-4 rounded">
                    <h2 className='text-[25px] font-semibold'>What is JWT, and how does it work?</h2>
                    <p className='text-gray-600 mt-5'>
                    JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. <br />
                    for Information Exchange: JWTs are a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with.
                    </p>
                </div>

                <div className="max-w-[450px] border p-4 rounded">
                    <h2 className='text-[25px] font-semibold'>What is the difference between javascript and NodeJS?</h2>
                    <p className='text-gray-600 mt-5'>
                    JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. <br />
                    NodeJS : NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                    </p>
                </div>

                <div className="max-w-[450px] border p-4 rounded">
                    <h2 className='text-[25px] font-semibold'>How does NodeJS handle multiple requests at the same time?</h2>
                    <p className='text-gray-600 mt-5'>
                    odeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them . js can handle ~15K requests per second, and the vanilla HTTP module can handle 70K rps <br />
                    NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests 
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Blog