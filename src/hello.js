// Hello world module

export function hello() {
    const content = document.getElementById('content')
    const helloWorld = document.createElement('h2')
    helloWorld.innerHTML = 'Hello World!'
    helloWorld.id = 'helloWorld'
    content.appendChild(helloWorld)
    console.log('Hello World!')
}