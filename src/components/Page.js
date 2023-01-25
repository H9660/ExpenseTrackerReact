import React, { useState } from 'react'

function Page() {
  const [expData, setExpData] = useState({
    message: "",
    price: "",
    date: new Date(),
  });
  const [expDataList, setExpDataList] = useState([])

  const submitData = () =>  {
    setExpDataList ([...expDataList, expData])
    console.log(expDataList)
  }
  // GEt data from form for submit data
  const handleSubmit = (event) =>{
    event.preventDefault();
    submitData();
    // setExpData("");
  }

  function handleChange (event) {
    switch(event.target.name) 
    {
      case "message":
        {
        setExpData({...expData, "message": event.target.value})
        break;
      }
      case "price":
        {
        setExpData({...expData, "price": event.target.value})
        break;
      }
      case "date":
        {
        setExpData({...expData, "date": Date(event.target.value)})
        break;
      }
      default:
        break;
    }
    console.log(expData)
  }


  return (
    <div>

        {/* <!-- component --> */}
  
    
    <div class="flex min-h-screen items-center justify-start bg-white">
      <div class="mx-auto w-full max-w-lg">
        <h1 class="text-4xl font-medium">Expense Tracker</h1>
        <p class="mt-3">Add an expense</p>
    
        <form action="https://api.web3forms.com/submit" class="mt-10"
        onSubmit={handleSubmit}>
        
        {/* <!-- This is a working contact form. Get your free access key from: https://web3forms.com/  --> */}
    
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> 
          <div class="grid gap-6 sm:grid-cols-2">
          <div class="relative z-0 col-span-2">
              <textarea name="message" rows="2" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "
              value={expData.name}
              onChange={handleChange}></textarea >
              <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Expense Description</label>
            </div>
            
            <div class="relative z-0 col-span-2" >
                <div>
                    <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                    <div class="relative mt-1 rounded-md shadow-sm">
                        {/* <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span class="text-gray-500 sm:text-sm">$</span>
                        </div> */}
                        <input type="text" name="price" id="price" 
                        class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                         placeholder="0.00"
                         value={expData.price}
                         onChange={handleChange}/>
                        <div class="absolute inset-y-0 right-0 flex items-center">
                        <label for="currency" class="sr-only">Currency</label>
                        <select id="currency" name="currency" class="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                            <option>USD</option>
                            <option>CAD</option>
                            <option>EUR</option>
                            <option>INR</option>
                        </select>
                        </div>
                    </div>
                </div>
            </div>

            
            <div class="relative z-0 col-span-2">
              <input type="date" name="date" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " 
              value={expData.date}
              onChange={handleChange}  />
              <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Expense date</label>
            </div>

          </div>
          <button type="submit" class="mt-5 rounded-md bg-black px-10 py-2 text-white">ADD</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Page