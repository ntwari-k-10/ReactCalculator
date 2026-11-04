export default function Number({onKeyPress}){
    function handleClick(event){
        const child=event.target.closest('.child')
        if (child) {
            onKeyPress(child.textContent)
        }
    }

 return (
    <div className='numbers' id='numbers' onClick={handleClick}>
        <p className="child">AC</p>
        <p className="child">+/-</p>
        <p className="child">%</p>
        <p className="child">9</p>
        <p className="child">8</p>
        <p className="child">7</p>
        <p className="child">6</p>
        <p className="child">5</p>
        <p className="child">4</p>
        <p className="child">3</p>
        <p className="child">2</p>
        <p className="child">1</p>
        <p className="child zero">0</p>
        <p className="child">.</p>
    </div>
 )
}