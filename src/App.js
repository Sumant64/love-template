import './app.css';

function App() {
  document.addEventListener('mousemove', function(e){
    let body = document.querySelector('body');
    let heart = document.createElement('span');

    let x = e.offsetX;
    let y = e.offsetY;
    heart.style.left = x+'px';
    heart.style.top = y+'px';

    let size = Math.random() * 80;
    heart.style.width = 20 + size + 'px';
    heart.style.height = 20 + size + 'px';

    let transformValue = Math.random() * 360;
    heart.style.transform = 'rotate('+transformValue+'deg)';

    body.appendChild(heart);

    setTimeout(()=> {
      heart.remove();
    }, 1000)
  })


  return (
    <>
      <div className='container'>
        <img className='back' src="images/back4.jpg" alt="" />
        <img className='girl' src="images/girl-removebg-preview.png" alt="" />
        <img className='lo1' src="images/lo1.png" alt="" />
        <img className='lo2' src="images/lo2.png" alt="" />
        <img className="lo3" src="images/lo3.png" alt="" />
        <img className="lo4" src="images/lo4.png" alt="" />
        <img className="love1" src="images/love2.png" alt="" />
        <img className="love2" src="images/love1.png" alt="" />
        <img className="love3" src="images/love2.png" alt="" />
        <img className="boy" src="images/boy.png" alt="" />
        <img className="ballon" src="images/ballon-removebg-preview.png" alt="" />
      </div>
    </>
  );
}

export default App;
