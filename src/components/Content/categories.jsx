import React, {Component, useState} from "react";

// class Categories extends Component{
//
//     state = {
//         activeCategory: 0
//     }
//
//     onSelectCategory = index => {
//         this.setState({
//             activeCategory: index
//         })
//     }
//
//     render() {
//         const { items, onCategoriesClick } = this.props
//         return(
//             <div className="categories">
//                 <ul>
//                     {items.map((name, index) => (
//                         <li className={this.state.activeCategory === index ? 'active' : ''} onClick={() => this.onSelectCategory(index)} key={`${name} + ${index}`} >{name}</li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }


const Categories = ({items, onCategoriesClick}) => {

    const [activeCategory, setCategory] = React.useState(null )

    const onSelectCategory = index => {
        setCategory(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() =>  onSelectCategory(null)}>Все</li>
                {items && items.map((name, index) => (
                    <li className={activeCategory === index ? 'active' : ''} onClick={() => onSelectCategory(index)} key={`${name} + ${index}`} >{name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Categories