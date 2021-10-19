import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import CategoryCard from './categoryCard';

function category() {
    return (
        <div className="category_container" id="Categories">
             <div className="box-c">
                <span to="#" className="custom-underline">Shop par catégorie</span>
            </div>

            <CategoryCard />
        </div>
    )
}

export default category;
