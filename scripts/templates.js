function inputButton(){
  return `<a class="w-1/4 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500 md:py-4 md:text-lg md:px-10 cursor-pointer mb-4">Add new task</a>`
}

function card(obj) {
    obj.statusExists = true;
    obj.statusIsDone = false;
  return `
  <div class="w-2/4 justify-center border-4 border-blue-200 mb-4 rounded-2xl bg-gradient-to-r from-green-200 to-blue-200" id='${obj.id}'>
    <h2 class="text-lg leading-6 font-medium text-gray-900 mt-5 text-2xl ml-6">${obj.title}</h2>
    <p class="mt-2 text-lg ml-6">${obj.text}</p>
    <p class="mt-2 text-lg ml-6">${obj.time}</p>
    <div class="ml-6">${obj.id}</div>
    <div class="my-5"></div>
    
    <a id="${obj.id}done" class="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white cursor-pointer hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm transition duration-500 ease-in-out bg-blue-600 hover:bg-green-500 transform hover:-translate-y-1 hover:scale-110 mb-5">Done</a>
    <input type="checkbox" class="card__checkbox" id="checkbox-${obj.id}">
    <a id="${obj.id}delete" class="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white cursor-pointer hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm transition duration-500 ease-in-out bg-blue-600 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 mb-5">Delete</a>
    <div> statusExists ${obj.statusExists}</div>
    <div> statusIsDone ${obj.statusIsDone}</div>
    </div>`
}


function modal() {
  return `<div id="modal" class="fixed z-10 inset-0 overflow-y-auto hidden">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-op  acity" aria-hidden="true"></div>
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-xl text-gray-900" id="modal-title">
                Create todo
              </h3>
              
            <div class="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 bg-white sm:p-6 w-80">
            <div class="grid grid-cols-6 gap-6">

              <div class="col-span-10">
                <label class="block text-sm font-medium text-gray-700">Title</label>
                <input type="text" id="inputTitle" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-10">
                <label for="street-address" class="block text-sm font-medium text-gray-700">Todo text</label>
                <input type="text" id="inputText" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

            </div>
          </div>
        </div>
        
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse ml-40">
          <button id="cancle" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
            Cancel
          </button>
          <button id="done" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            Done
          </button>
        </div>
    </div>
    
  </div>`
}

function header() {
  let done;
  let progress;
  return `
  <div class="bg-pink-100 rounded-2xl">
  <div class="flex flex-row bg-pink-400 center rounded-2xl justify-center">
        <p class="block text-indigo-600 text-2xl font-extrabold tracking-tight text-gray-500 sm:text-2xl mr-4">${done} - is completed</p>
    </div>
  <div class="max-w-7xl mx-auto py-12 sm: lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2>
      <span class="block text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"">To do your tasks</span>
    </h2>
    <div class="flex lg:mt-0 lg:flex-shrink-0">
    
      <div class="inline-flex rounded-md shadow ml-8">
        <a href="#" id='create' class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Create
        </a>
      </div>
      <div class="ml-3 inline-flex rounded-md shadow ml-8">
        <a href="#" id="all" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Delete all
        </a>
        <div class="ml-3 inline-flex rounded-md shadow ml-8">
        <a href="#" id="last" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Delete last
        </a>
        </div>
      </div>   
    </div>   
  </div>
  <div class="flex flex-row bg-pink-400 center rounded-2xl justify-center">
        <p class="block text-indigo-600 text-2xl font-extrabold tracking-tight text-gray-500 sm:text-2xl">${progress} - in progress</p>
    </div>
</div>
  `
}

function list() {
  return `
  <div id='list' class="bg-yellow-200 w-8/12 grid justify-items-center"></div>
  `
}

export {inputButton, modal, card, header, list};