import Category from './Product_Category/Category'
import Price from './Price_Range/Price'
import Colors from './Colors/Colors'
import shopifylogo from './shopifylogo.png'
import './Sidebar.css'

function Sidebar({handleChange}) {
  return (
    <section className="sidebar">
        <div className="logo-container">
            <img src={shopifylogo} />
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
    </section>
  )
}

export default Sidebar
