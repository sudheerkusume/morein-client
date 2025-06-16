import React from 'react'
import { Routes, Route } from 'react-router-dom';
// import LandingPage from './stores/pages/LandingPage'
// import Pharmacy from './stores/component/Pharmacy'
// import Babycare from './stores/component/Babycare'
// import PharmacySingle from './singles/PharmacySingle'
// import PharmacyPage from './stores/pages/PharmacyPage'
// import UserCart from './stores/UserCart';
// import PetcarePage from './stores/pages/PetcarePage';
// import PetcareSingle from './singles/PetcareSingle';
// import BabycareSingle from './singles/BabycareSingle';
// import BabycarePage from './stores/pages/BabycarePage';
// import EggsSingle from './singles/EggsSingle';
// import EggsPage from './stores/pages/EggsPage';
// import Eggs from './stores/component/Eggs';
// import SnacksSingle from './singles/SnacksSingle';
// import Snacks from './stores/component/Snacks'
// import SnacksPage from './stores/pages/SnacksPage'
// import DrinksSingle from './singles/DrinksSingle';
// import DrinksPage from './stores/pages/DrinksPage'
// import Drinks from './stores/component/Drinks'
// import CandiesSingle from './singles/CandiesSingle';
// import CandiesPage from './stores/pages/CandiesPage'
// import Candies from './stores/component/Candies';
// import AboutPage from './stores/component/AboutPage';
// import Contact from './stores/component/Contact';
// import NoPage from './stores/component/NoPage';
// import Signin from './stores/Admin/Signin';
// import DashBoard from './stores/Admin/DashBoard';
// import Services from './stores/component/Services';
import LandingPage from '../pages/LandingPage'
import NoPage from '../component/NoPage'
import Signin from '../Admin/Signin'
import Dashboard from '../Admin/DashBoard'
import AboutPage from '../component/AboutPage'
import Services from '../component/Services'
import Contact from '../component/Contact'
import EggsPage from '../pages/EggsPage'
import PharmacyPage from '../pages/PharmacyPage';
import PetcarePage from '../pages/PetcarePage'
import DrinksPage from '../pages/DrinksPage'
import CandiesPage from '../pages/CandiesPage'
import PharmacySingle from '../../singles/PharmacySingle'
import Pharmacy from './Pharmacy';
import PetcareSingle from '../../singles/PetcareSingle'
import BabycareSingle from '../../singles/BabycareSingle'
import BabycarePage from '../pages/BabycarePage'
import Babycare from './Babycare'
import EggsSingle from '../../singles/EggsSingle'
import Eggs from './Eggs';
import SnacksSingle from '../../singles/SnacksSingle'
import SnacksPage from '../pages/SnacksPage'
import Snacks from './Snacks';
// import DrinksSingle from '.../singles/DrinksSingle';
// import DrinksPage from '../pages/DrinksPage';
import DrinksSingle from '../../singles/DrinksSingle'
import Drinks from './Drinks';
import CandiesSingle from '../../singles/CandiesSingle';
// import CandiesPage from '../pages/CandiesPage';
import Candies from './Candies';
import Cart from '../UserCart'
import DashBoard from '../Admin/DashBoard';
const Maping = () => {
  return (
        <Routes>
          <Route path='/' Component={LandingPage} />
          <Route path='*' Component={NoPage} />
          <Route path='/admin' Component={Signin} />
          <Route path='/dashboard' Component={DashBoard}/>
          <Route path = '/About' Component={AboutPage} />         
          <Route path = '/Services' Component={Services} />
          <Route path = '/Contact' Component={Contact} />
           <Route path="/products/eggs" Component={EggsPage } />
           <Route path="/products/pharmacy" Component={PharmacyPage} />
           <Route path="/products/petcare" Component={PetcarePage} />
           <Route path="/products/drinks" Component={DrinksPage} />
          <Route path="/products/candies" Component={CandiesPage} />

          <Route path='/pharmacy/:id' Component={ PharmacySingle} />
          <Route path='/Pharmacy' Component={PharmacyPage } />
          <Route path='/Pharmacy/medical' Component={Pharmacy } />
          <Route path='/petcare/:id' Component={PetcareSingle } />
          <Route path='/Petcare' Component={PetcarePage } />
          <Route path='/Petcare/product' Component={Pharmacy } />
          <Route path='/babycare/:id' Component={BabycareSingle} />
          <Route path='/Babycare' Component={BabycarePage } />
          <Route path='/Babycare/product' Component={Babycare } />

          <Route path='/eggs/:id' Component={EggsSingle } />
          <Route path='/Eggs' Component={EggsPage } />
          <Route path='/Eggs/product' Component={Eggs} />
          
          <Route path='/Snacks/:id' Component={SnacksSingle } />
          <Route path='/Snacks' Component={SnacksPage } />
          <Route path='/Snacks/product' Component={Snacks } />

          <Route path='/Drinks/:id' Component={DrinksSingle } />
          <Route path='/Drinks' Component={DrinksPage } />
          <Route path='/Drinks/product' Component={Drinks} />

          <Route path='/Candies/:id' Component={CandiesSingle } />
          <Route path='/Candies' Component={CandiesPage } />
          <Route path='/Candies/product' Component={Candies} />
          <Route path='/Cart' Component={Cart}></Route>

          {/* <Route path='/Cart' Component={<UserCart />} /> */}
        </Routes>

  )
}

export default Maping