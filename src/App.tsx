import { Instagram } from 'lucide-react';
import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

const Ornament = () => (
  <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
    <path d="M60 0L63 9L72 12L63 15L60 24L57 15L48 12L57 9L60 0Z" fill="var(--color-accent)"/>
    <path d="M30 9L31.5 13.5L36 15L31.5 16.5L30 21L28.5 16.5L24 15L28.5 13.5L30 9Z" fill="var(--color-accent)"/>
    <path d="M90 9L91.5 13.5L96 15L91.5 16.5L90 21L88.5 16.5L84 15L88.5 13.5L90 9Z" fill="var(--color-accent)"/>
    <line x1="0" y1="12" x2="20" y2="12" stroke="var(--color-accent)" strokeWidth="0.5"/>
    <line x1="100" y1="12" x2="120" y2="12" stroke="var(--color-accent)" strokeWidth="0.5"/>
  </svg>
);

const JharokhaTop = () => (
  <svg viewBox="0 0 1200 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24 md:h-32 lg:h-48 text-[var(--color-accent)] block">
    <defs>
      <linearGradient id="jharokha-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="var(--color-bg-card)" stopOpacity="0.1" />
        <stop offset="100%" stopColor="var(--color-bg-card)" stopOpacity="0.7" />
      </linearGradient>
      <g id="ornament" fill="currentColor" stroke="currentColor" strokeWidth="0.5">
        <line x1="0" y1="0" x2="0" y2="15" strokeOpacity="0.5" />
        <path d="M 0 15 L 4 22 L 0 29 L -4 22 Z" fillOpacity="0.6" stroke="none" />
        <circle cx="0" cy="33" r="1.5" fillOpacity="0.8" stroke="none" />
      </g>
    </defs>

    {/* Background Fill */}
    <path d="M 1 200 
             L 1 180 
             L 40 180 
             C 40 100, 180 150, 230 120 
             C 280 90, 370 100, 420 70 
             C 470 40, 550 50, 600 20 
             C 650 50, 730 40, 780 70 
             C 830 100, 920 90, 970 120 
             C 1020 150, 1160 100, 1160 180 
             L 1199 180 
             L 1199 200 Z" 
          fill="url(#jharokha-grad)" />

    {/* Main Outer Stroke */}
    <path d="M 1 200 
             L 1 180 
             L 40 180 
             C 40 100, 180 150, 230 120 
             C 280 90, 370 100, 420 70 
             C 470 40, 550 50, 600 20 
             C 650 50, 730 40, 780 70 
             C 830 100, 920 90, 970 120 
             C 1020 150, 1160 100, 1160 180 
             L 1199 180 
             L 1199 200" 
          fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" 
          vectorEffect="non-scaling-stroke" />

    {/* Inner Decorative Line 1 */}
    <path d="M 40 180 
             C 40 100, 180 150, 230 120 
             C 280 90, 370 100, 420 70 
             C 470 40, 550 50, 600 20 
             C 650 50, 730 40, 780 70 
             C 830 100, 920 90, 970 120 
             C 1020 150, 1160 100, 1160 180" 
          fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" 
          transform="translate(0, 6)"
          vectorEffect="non-scaling-stroke" />

    {/* Inner Decorative Line 2 */}
    <path d="M 40 180 
             C 40 100, 180 150, 230 120 
             C 280 90, 370 100, 420 70 
             C 470 40, 550 50, 600 20 
             C 650 50, 730 40, 780 70 
             C 830 100, 920 90, 970 120 
             C 1020 150, 1160 100, 1160 180" 
          fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" 
          transform="translate(0, 12)"
          vectorEffect="non-scaling-stroke" />

    {/* Hanging Ornaments */}
    <use href="#ornament" x="230" y="120" />
    <use href="#ornament" x="420" y="70" />
    <use href="#ornament" x="600" y="20" />
    <use href="#ornament" x="780" y="70" />
    <use href="#ornament" x="970" y="120" />
  </svg>
);

const menuData = [
  {
    "category": "Beverage",
    "items": [
      {
        "name": "Mineral Water",
        "price": "₹20",
        "description": "Refreshing purified water.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Water%20bottles%20stock%20photo_%20Image%20of%20healthy,%20bottles%20-%2012522340.jpg?updatedAt=1772435361827"
      },
      {
        "name": "Plain Tea",
        "price": "₹20",
        "description": "Classic brewed black tea.",
        "image": "https://ik.imagekit.io/j1fgksdwx/25%20Homemade%20Tea%20Recipes%20for%20a%20Perfect%20Brew.jpg"
      },
      {
        "name": "Masala Tea",
        "price": "₹50",
        "description": "Spiced Indian tea with aromatic herbs.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Masala%20Chai%20(Spiced%20Tea)_Warm,%20spiced,%20and%20soul-soothing%20__%20The%20perfect%20sip%20to%20wind%20down%20the%20day__Why%20we%20love%20it_%20It_s%20bold,%20comforting,%20and%20fills%20your%20kitchen%20with%20cozy%20aromas.__.__MasalaChai%20_EveningSips%20_ChaiVibes"
      },
      {
        "name": "Coffee",
        "price": "₹70",
        "description": "Freshly brewed hot coffee.",
        "image": "https://ik.imagekit.io/j1fgksdwx/regular%20coffee.jpg?updatedAt=1759174155086"
      },
      {
        "name": "Cold Coffee",
        "price": "₹120",
        "description": "Chilled blended coffee with milk.",
        "image": "https://ik.imagekit.io/j1fgksdwx/cold%20coffee.jpg?updatedAt=1759174012948"
      },
      {
        "name": "Lassi",
        "price": "₹100",
        "description": "Traditional yogurt-based drink.",
        "image": "https://ik.imagekit.io/j1fgksdwx/lassi.jpg?updatedAt=1759174013497"
      },
      {
        "name": "Makhaniya Lassi",
        "price": "₹120",
        "description": "Rich, creamy yogurt drink with butter.",
        "image": "https://ik.imagekit.io/j1fgksdwx/download%20(3).jpg"
      }
    ]
  },
  {
    "category": "Shake",
    "items": [
      {
        "name": "Mango Shake",
        "price": "₹150",
        "description": "Sweet and creamy mango blend.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Summer%20Mango%20Coconut%20Float%20Milkshake_%20Tropical___.jpg"
      },
      {
        "name": "Pineapple Shake",
        "price": "₹150",
        "description": "Tropical pineapple milkshake.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Homemade%20Pineapple%20Milkshake%20Recipe%20-%20Ninja%20Creami%20Ice%20Cream%20Recipes%20_Healthy%20Protein%20Recipes_.jpg"
      },
      {
        "name": "Chocolat Shake",
        "price": "₹150",
        "description": "Rich chocolate blended with milk.",
        "image": "https://ik.imagekit.io/j1fgksdwx/11%20Easy%20&%20Healthy%20Breakfast%20Smoothie%20Recipes!.jpg"
      },
      {
        "name": "Banana Shake",
        "price": "₹150",
        "description": "Smooth and creamy banana shake.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Banana%20Ice-cream.jpg"
      },
      {
        "name": "Strawberry Shake",
        "price": "₹150",
        "description": "Sweet strawberry flavored milkshake.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Best%20strawberry%20milkshake%20recipe%20without%20ice%20cream.jpg?updatedAt=1774363764266"
      }
    ]
  },
  {
    "category": "Soup",
    "items": [
      {
        "name": "Veg Sweet Corn Soup",
        "price": "₹200",
        "description": "Comforting soup with sweet corn kernels.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Corn%20Soup.jpg"
      },
      {
        "name": "Veg Clear Soup",
        "price": "₹200",
        "description": "Light and healthy vegetable broth.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Sweet%20Corn%20Clear%20Soup%20Recipe%20_%20Cook%20Click%20N%20Devour!!!.jpg"
      },
      {
        "name": "Veg Hot and Sour Soup",
        "price": "₹170",
        "description": "Spicy and tangy vegetable soup.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Vegetarian%20hot%20and%20sour%20soup%20is%20an%20easy%20to%20make%20meal%20for%20cold%20days_%20It%20is%20packed%20with%20vegetables,%20lightly%20seasoned%20and%20super%20comforting!.jpg"
      },
      {
        "name": "Veg Manchaw Soup",
        "price": "₹170",
        "description": "Spicy Indo-Chinese soup with crispy noodles.",
        "image": "https://ik.imagekit.io/j1fgksdwx/212K%20views%20_%202_7K%20reactions%20_%20Restaurant%20Style%20Veg%20Manchow%20Soup%20Recipe%20_%20%E0%A4%B5%E0%A5%87%E0%A4%9C%20%E0%A4%AE%E0%A4%A8%E0%A4%9A%E0%A4%BE%E0%A4%93%20%E0%A4%B8%E0%A5%82%E0%A4%AA%20_%20Chef%20Sanjyot%20Keer%20_%20Your%20Food%20Lab%20_%20Facebook.jpg"
      },
      {
        "name": "Cream of Tomato Soup",
        "price": "₹200",
        "description": "Rich and creamy tomato soup.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Roasted%20Tomato%20Soup.jpg"
      },
      {
        "name": "Cream of Mushroom Soup",
        "price": "₹220",
        "description": "Velvety soup with fresh mushrooms.",
        "image": "https://ik.imagekit.io/j1fgksdwx/CREAM%20OF%20MUSHROOM%20SOUP.jpg?updatedAt=1759147132959"
      },
      {
        "name": "Lemon Coriander Soup",
        "price": "₹150",
        "description": "Refreshing citrus and herb broth.",
        "image": "https://ik.imagekit.io/j1fgksdwx/LEMON%20CORIANDER%20SOUP.webp?updatedAt=1759174014597"
      }
    ]
  },
  {
    "category": "Salad",
    "items": [
      {
        "name": "Onion Salad",
        "price": "₹70",
        "description": "Freshly sliced onions with lemon and chaat masala.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Sumac%20Onions%20(Turkish%20Onion%20Salad).jpg?updatedAt=1772378441744"
      },
      {
        "name": "Tomato Salad",
        "price": "₹50",
        "description": "Fresh tomato slices with light seasoning.",
        "image": "https://ik.imagekit.io/j1fgksdwx/My%20favourite%20Tomato%20Salad%20(1).jpg?updatedAt=1772378441737"
      },
      {
        "name": "Green Salad",
        "price": "₹100",
        "description": "Assorted fresh seasonal vegetables.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Try%20this%20fresh%20mixed%20green%20salad%20with%20tangy%20balsamic%20vinaigrette,%20packed%20with%20crisp%20greens%20and%20veggies_%20Simple,%20delicious,%20and%20healthy!%20_%20Mixed%20Greens%20Salad%20_%20Easy%20Side%20Salad%20Recipe%20_%20Salad%20Recipes%20_.jpg"
      },
      {
        "name": "Cucumber Salad",
        "price": "₹70",
        "description": "Cool and crisp cucumber slices.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Cucumber%20Salad%20with%20Herb%20Garlic%20Vinaigrette.jpg?updatedAt=1772378441759"
      },
      {
        "name": "Russian Salad",
        "price": "₹150",
        "description": "Mixed vegetables and fruits in creamy mayo dressing.",
        "image": "https://ik.imagekit.io/j1fgksdwx/RUSSIAN%20SALAD.webp?updatedAt=1759147890223"
      },
      {
        "name": "Kachumber Salad",
        "price": "₹100",
        "description": "Finely chopped mixed vegetable salad.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Kachumber%20Salad.jpg?updatedAt=1772378441712"
      }
    ]
  },
  {
    "category": "Roll",
    "items": [
      {
        "name": "Cheese Roll",
        "price": "₹250",
        "description": "Crispy roll stuffed with melted cheese.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Jenan%20on%20Instagram_%20_I_ve%20been%20seeing%20some%20of%20my%20fellow%20food%20bloggers%20posting%20these%20cheese%20rolls%20and%20I%20knew%20I%20had%20to%20make%20some!%20%20Thanks%20@cookingwithnadak%20__.jpg"
      },
      {
        "name": "Veg Cheese Spring Roll",
        "price": "₹250",
        "description": "Crispy rolls with vegetables and cheese.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Cheese%20Spring%20Rolls.jpg"
      },
      {
        "name": "Veg Spring Roll",
        "price": "₹220",
        "description": "Classic crispy vegetable stuffed rolls.",
        "image": "https://ik.imagekit.io/j1fgksdwx/SPRING%20ROLLS.jpeg?updatedAt=1758292990786"
      },
      {
        "name": "Paneer Roll",
        "price": "₹250",
        "description": "Spiced cottage cheese wrapped in a flatbread.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Paneer%20Kathi%20Roll.jpg?updatedAt=1772709608129"
      }
    ]
  },
  {
    "category": "Roasted",
    "items": [
      {
        "name": "Roasted Papad",
        "price": "₹50",
        "description": "Crispy roasted lentil wafer.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Papad_.jpg?updatedAt=1772434847368"
      },
      {
        "name": "Masala Roasted Papad",
        "price": "₹70",
        "description": "Roasted wafer topped with spicy onion-tomato mix.",
        "image": "https://ik.imagekit.io/j1fgksdwx/masala-papad-1000x1000.webp?updatedAt=1759147518990"
      },
      {
        "name": "Fry Papad",
        "price": "₹100",
        "description": "Deep-fried crispy lentil wafer.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Papad_.jpg?updatedAt=17724348473685"
      },
      {
        "name": "Fry Masala Papad",
        "price": "₹120",
        "description": "Fried wafer with spicy vegetable topping.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Masala%20Papad%20(2).jpg"
      },
      {
        "name": "Plain Khichiya",
        "price": "₹70",
        "description": "Traditional roasted rice flour cracker.",
        "image": "https://ik.imagekit.io/j1fgksdwx/%E0%AA%B5%E0%AA%BE%E0%AA%A8%E0%AA%B5%E0%AA%BE%20%E0%AA%95%E0%AA%B9%E0%AB%8B%20%E0%AA%95%E0%AB%87%20%E0%AA%AB%E0%AA%BE%E0%AA%AB%E0%AA%A1%E0%AA%BE%20-%20%E0%AA%A4%E0%AB%87%E0%AA%A8%E0%AB%80%20%E0%AA%93%E0%AA%B0%E0%AB%80%E0%AA%9C%E0%AB%80%E0%AA%A8%E0%AA%B2%20%E0%AA%B0%E0%AB%80%E0%AA%A4%E0%AA%A5%E0%AB%80%20_%20%E0%A4%B5%E0%A4%BE%E0%A4%A8%E0%A4%B5%E0%A4%BE%20%E0%A4%B0%E0%A5%87%E0%A4%B8%E0%A4%BF%E0%A4%AA%E0%A5%80%20_%20Vanva%20Recipe%20(1).jpg?updatedAt=1772434650565"
      },
      {
        "name": "Masala Khichiya",
        "price": "₹100",
        "description": "Rice cracker topped with spicy masala.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Leela%20sirvi%20on%20Instagram_%20_Masala%20Khichiya_%20_%20.%20.%20Khichiya%20is%20a%20Rajasthani%20papad%20made%20with%20refined%20_%20rice%20_%20maize%20_%20ragi%20flour.%20Masala%20khichiya%20is%20the%20best%20anytime__"
      },
      {
        "name": "Cheese Masala Khichiya",
        "price": "₹150",
        "description": "Spicy rice cracker loaded with cheese.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Aloo%20Chana%20Papdi%20Chaat.jpg"
      }
    ]
  },
  {
    "category": "Breakfast",
    "items": [
      {
        "name": "Butter Poha",
        "price": "₹70",
        "description": "Flattened rice cooked with spices and topped with butter.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Poha%20Recipe.jpg"
      },
      {
        "name": "Plain Poha",
        "price": "₹50",
        "description": "Light and healthy flattened rice breakfast.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Poha%20(1).jpg"
      },
      {
        "name": "Masala Poha",
        "price": "₹100",
        "description": "Spicy and tangy flattened rice.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Poha.jpg"
      },
      {
        "name": "Veg Upma",
        "price": "₹150",
        "description": "Savory semolina porridge with vegetables.",
        "image": "https://ik.imagekit.io/j1fgksdwx/upma.webp?updatedAt=1758292980367"
      },
      {
        "name": "Masala Dosa",
        "price": "₹150",
        "description": "Crispy crepe stuffed with spiced potato filling.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Crispy%20Masala%20Dosa%20full%20Recipe%20_.jpg"
      },
      {
        "name": "Plain Dosa",
        "price": "₹100",
        "description": "Classic thin and crispy South Indian crepe.",
        "image": "https://ik.imagekit.io/j1fgksdwx/download%20(4).jpg"
      },
      {
        "name": "Rava Dosa",
        "price": "₹200",
        "description": "Crispy semolina crepe with spices.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Rava%20Dosa%20-Instant%20Onion%20Rava%20Dosa%20-%20Tomato%20Blues.jpg"
      },
      {
        "name": "Pav Bhaji",
        "price": "₹100",
        "description": "Spicy mixed vegetable mash served with buttered bread.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Pav%20Bhaji.jpg"
      },
      {
        "name": "Extra Pav (1pc)",
        "price": "₹30",
        "description": "Additional buttered bread roll.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Hutterite%20bun%20recipe%20-%20%C2%A0Hutterite%20Br%C3%B6tchen.jpg"
      }
    ]
  },
  {
    "category": "Paratha",
    "items": [
      {
        "name": "Aloo Paratha",
        "price": "₹100",
        "description": "Whole wheat flatbread stuffed with spiced potatoes.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Aloo%20Paratha%20Full%20Recipe%20in%20English%20_.jpg"
      },
      {
        "name": "Gobi Paratha",
        "price": "₹100",
        "description": "Flatbread stuffed with spiced cauliflower.",
        "image": "https://ik.imagekit.io/j1fgksdwx/How%20to%20Make%20Gobi%20Paratha%20_%20Easy%20Stuffed%20Paratha%20Recipe.jpg"
      },
      {
        "name": "Paneer Paratha",
        "price": "₹150",
        "description": "Flatbread stuffed with seasoned cottage cheese.",
        "image": "https://ik.imagekit.io/j1fgksdwx/PANEER%20PARATHA%20WITH%20CURD.jpg?updatedAt=1759175503156"
      },
      {
        "name": "Mix Veg Paratha",
        "price": "₹100",
        "description": "Flatbread stuffed with mixed vegetables.",
        "image": "https://ik.imagekit.io/j1fgksdwx/_.jpg"
      },
      {
        "name": "Onion Paratha",
        "price": "₹100",
        "description": "Flatbread stuffed with spiced onions.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Onion%20Paratha.jpg"
      },
      {
        "name": "Palak Paratha",
        "price": "₹100",
        "description": "Healthy flatbread made with spinach.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Healthy%20Spinach%20Paratha%20Recipe%20for%20Breakfast.jpg"
      },
      {
        "name": "Plain Paratha",
        "price": "₹50",
        "description": "Classic flaky whole wheat flatbread.",
        "image": "https://ik.imagekit.io/j1fgksdwx/download%20(5).jpg"
      }
    ]
  },
  {
    "category": "Maggie",
    "items": [
      {
        "name": "Plain Maggie",
        "price": "₹70",
        "description": "Classic instant noodles.",
        "image": "https://ik.imagekit.io/j1fgksdwx/If%20you_ve%20got%20a%20pack%20of%20instant%20ramen%20and%20a%20slice%20of%20cheese%20in%20your%20fridge,%20you're%20already%20halfway%20to%20making%20one%20of%20my%20favorite%20guilty-pleas.%20Perfect%20for%20late-night%20cravings%20or%20those%20days%20when%20dinner%20feels%20like%20a%20chore_"
      },
      {
        "name": "Masala Maggie",
        "price": "₹100",
        "description": "Instant noodles cooked with extra spices.",
        "image": "https://ik.imagekit.io/j1fgksdwx/download%20(6).jpg?updatedAt=1774409252984"
      },
      {
        "name": "Cheese Maggie",
        "price": "₹150",
        "description": "Cheesy and creamy instant noodles.",
        "image": "https://ik.imagekit.io/j1fgksdwx/download%20(7).jpg"
      }
    ]
  },
  {
    "category": "Pakoda",
    "items": [
      {
        "name": "Aloo Pakoda 10pc",
        "price": "₹120",
        "description": "Crispy deep-fried potato fritters.",
        "image": "https://ik.imagekit.io/j1fgksdwx/download%20(9).jpg"
      },
      {
        "name": "Onion Pakoda 10pc",
        "price": "₹120",
        "description": "Crispy deep-fried onion fritters.",
        "image": "https://ik.imagekit.io/j1fgksdwx/No-Fry%20Onion%20Pakodas%20(1).jpg"
      },
      {
        "name": "Paneer Pakoda 10pc",
        "price": "₹200",
        "description": "Cottage cheese cubes fried in spiced batter.",
        "image": "https://ik.imagekit.io/j1fgksdwx/PANEER%20PAKORA.webp?updatedAt=1758292956189"
      },
      {
        "name": "Mix Veg Pakoda 10pc",
        "price": "₹150",
        "description": "Assorted vegetable fritters.",
        "image": "https://ik.imagekit.io/j1fgksdwx/MIX%20VEG.%20PAKORA.jpeg?updatedAt=1758293753579"
      }
    ]
  },
  {
    "category": "Sandwich",
    "items": [
      {
        "name": "Veg Sandwich",
        "price": "₹100",
        "description": "Fresh vegetables layered between bread slices.",
        "image": "https://ik.imagekit.io/j1fgksdwx/veggie%20sandwhich.jpg?updatedAt=1759910810751"
      },
      {
        "name": "Veg Grill Sandwich",
        "price": "₹150",
        "description": "Grilled sandwich with mixed vegetables.",
        "image": "https://ik.imagekit.io/j1fgksdwx/veg%20grill%20sandwixh.webp?updatedAt=1758211144373"
      },
      {
        "name": "Veg Cheese Sandwich",
        "price": "₹200",
        "description": "Vegetable sandwich loaded with cheese.",
        "image": "https://ik.imagekit.io/j1fgksdwx/cheese%20sandwich.webp?updatedAt=1758211132553"
      },
      {
        "name": "Veg Paneer Tikka Sandwich",
        "price": "₹250",
        "description": "Sandwich stuffed with spiced paneer tikka.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Sarthak%20Jain%E2%9C%B4%EF%B8%8F%20on%20Instagram_%20_Paneer%20tikka%20sandwich%20_%20_%20Taste-O-Meter-5_5_%20.%20Dm%20for%20exact%20location%20_%EF%B8%8F%20.%20Follow%20@wannabefoodie69%20%E2%99%A5%EF%B8%8F%20For%20more%20food%20related%20stuff%20.__"
      },
      {
        "name": "Veg Club Sandwich",
        "price": "₹250",
        "description": "Multi-layered sandwich with veggies and cheese.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Merrie%20Berrie%20Veg%20Club%20(Three%20Layerd%20Sandwich,Vegetable%20Patty,Sliced%20Veg%20Cheese%20&%20Mayo).jpg"
      }
    ]
  },
  {
    "category": "Burger",
    "items": [
      {
        "name": "Veg Burger",
        "price": "₹120",
        "description": "Burger with a crispy vegetable patty.",
        "image": "https://ik.imagekit.io/j1fgksdwx/The%20Ultimate%20Veggie%20Burger.jpg"
      },
      {
        "name": "Veg Cheese Burger",
        "price": "₹150",
        "description": "Vegetable burger topped with a cheese slice.",
        "image": "https://ik.imagekit.io/j1fgksdwx/%CB%97%CB%8F%CB%8B%EA%92%B0_%20%EA%92%B1%20___'_%20______!!.jpg"
      }
    ]
  },
  {
    "category": "Pizza",
    "items": [
      {
        "name": "Onion Capsicum Pizza",
        "price": "₹150",
        "description": "Pizza topped with fresh onions and capsicum.",
        "image": "https://ik.imagekit.io/j1fgksdwx/download%20(13).jpg"
      },
      {
        "name": "Cheese Margarita Pizza",
        "price": "₹250",
        "description": "Classic pizza with rich tomato sauce and cheese.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Delicious%20Margherita%20Pizza_%20Classic%20Flavor%20with%20Fresh%20Mozzarella,%20Basil,%20and%20Cherry%20Tomatoes.jpg"
      },
      {
        "name": "Double Cheese Pizza",
        "price": "₹300",
        "description": "Pizza loaded with extra mozzarella cheese.",
        "image": "https://ik.imagekit.io/j1fgksdwx/_bhukkad_dilli_ke%20on%20Instagram_%20_Another%20one%20of%20my%20weaknesses%20chessy%20pizza__%20_%20Double%20tap%20if%20you%20like%20it%20%E2%9D%A4%EF%B8%8F%20Tag%20karo%20like%20karo%20comment%20karo%20share%20karo_%20.%20FOLLOW__"
      },
      {
        "name": "Veg Cheese Pizza",
        "price": "₹170",
        "description": "Pizza topped with mixed vegetables and cheese.",
        "image": "https://ik.imagekit.io/j1fgksdwx/download%20(10).jpg"
      },
      {
        "name": "Paneer Pizza",
        "price": "₹250",
        "description": "Pizza topped with spiced cottage cheese cubes.",
        "image": "https://ik.imagekit.io/j1fgksdwx/download%20(11).jpg"
      },
      {
        "name": "Sweet Corn Cheese pizza",
        "price": "₹150",
        "description": "Pizza topped with sweet corn and cheese.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Corn%20&%20Cheese%20Pizza.jpg"
      },
      {
        "name": "Mushroom Pizza",
        "price": "₹200",
        "description": "Pizza topped with fresh mushrooms.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Vegan%20Mushroom%20Pizza%20__%20You%20will%20definitely%20want%20a%20piz_za%20this!_%20Follow%20@plantiful_palate%20for%20more%20recipes_%EF%B8%8F%20Recipe_%20Ingredients_%20For%20the%20Dough_%20-%20250g%20plain%20flour%20-%20150ml%20warm%20water%20-%201%20tbsp%20olive%20oil%20-%201%20tsp%20i.jpg"
      },
      {
        "name": "Paneer Tikka Pizza",
        "price": "₹250",
        "description": "Pizza topped with tandoori paneer tikka.",
        "image": "https://ik.imagekit.io/j1fgksdwx/download%20(12).jpg"
      }
    ]
  },
  {
    "category": "Pasta",
    "items": [
      {
        "name": "White Sauce Pasta",
        "price": "₹150",
        "description": "Pasta tossed in a creamy and cheesy white sauce.",
        "image": "https://ik.imagekit.io/j1fgksdwx/White%20Sauce%20Pasta%20(Bechamel%20Sauce%20Pasta).jpg"
      },
      {
        "name": "Red Sauce Pasta",
        "price": "₹200",
        "description": "Pasta tossed in a tangy and spicy tomato sauce.",
        "image": "https://ik.imagekit.io/j1fgksdwx/arrabita%20pasta.webp?updatedAt=1758211132567"
      },
      {
        "name": "Pink Sauce Pasta",
        "price": "₹220",
        "description": "Pasta in a mix of creamy white and tangy red sauce.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Pink%20Sauce%20Pasta%20_%20Skinny%20Spatula.jpg"
      }
    ]
  },
  {
    "category": "Chinese",
    "items": [
      {
        "name": "Crispy Corn",
        "price": "₹150",
        "description": "Deep-fried sweet corn kernels tossed in spices.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Crispy%20corn%20recipe.jpg"
      },
      {
        "name": "American Corn",
        "price": "₹150",
        "description": "Buttered and seasoned sweet corn.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Crispy%20Corn%20Recipe%20(Crunchy%20Corn%20Snack)%20-%20Swasthi's%20Recipes.jpg"
      },
      {
        "name": "French Fry",
        "price": "₹120",
        "description": "Classic crispy deep-fried potato strips.",
        "image": "https://ik.imagekit.io/j1fgksdwx/french%20fries.webp?updatedAt=1758211132814"
      },
      {
        "name": "Peri Peri French Fry",
        "price": "₹150",
        "description": "French fries tossed in spicy peri peri seasoning.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Peri%20Peri%20Fries__.jpg?updatedAt=1771257841371"
      },
      {
        "name": "Honey Chilli Potato",
        "price": "₹200",
        "description": "Crispy potatoes tossed in a sweet and spicy sauce.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Chinese-style%20Honey%20Chilli%20Potato%20Recipe.jpg"
      },
      {
        "name": "Chili Paneer Dry",
        "price": "₹250",
        "description": "Spicy stir-fried cottage cheese cubes.",
        "image": "https://ik.imagekit.io/j1fgksdwx/chilli%20panner.jpeg?updatedAt=1758292957291"
      },
      {
        "name": "Chili Paneer Gravy",
        "price": "₹150",
        "description": "Cottage cheese in a spicy Indo-Chinese gravy.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Sometimes%20all%20you%20need%20is%20Chilli%20Paneer%20_%20_%20.%20.%20.%20.%20%20%20_countrykitchen%20_chillipaneer%20_foodiesays?updatedAt=1771913129595"
      },
      {
        "name": "Veg Crispy",
        "price": "₹150",
        "description": "Assorted vegetables fried crisp and tossed in sauce.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Chinese%20crispy%20veggies.jpg"
      },
      {
        "name": "Mushroom Chili",
        "price": "₹250",
        "description": "Spicy stir-fried mushrooms with bell peppers.",
        "image": "https://ik.imagekit.io/j1fgksdwx/download%20(14).jpg"
      },
      {
        "name": "Baby Corn Chili",
        "price": "₹170",
        "description": "Crispy baby corn tossed in spicy chili sauce.",
        "image": "https://ik.imagekit.io/j1fgksdwx/_Crispy%20Chilli%20Baby%20Corn%20Fingers%20_%20Fiery,%20Tangy%20&%20Finger-Licking!%20%E2%9C%A8___Baby%20corn%20coated%20in%20a%20spiced%20batter,%20fried%20(or%20air-fried)%20until%20crisp,%20then%20tossed%20in%20a%20glossy%20chilli-garlic%20s.__%20Sauce%20Toss_%20In%20a%20pan,%20saut%C3%A9%20g___?updatedAt=1771394424068"
      },
      {
        "name": "Paneer 65",
        "price": "₹270",
        "description": "Spicy, deep-fried South Indian style paneer.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Paneer%2065%20Fry%20Recipe%20(Better%20than%20Restaurant)%20-%20Swasthi's%20Recipes.jpg?updatedAt=1771913234865"
      },
      {
        "name": "Manchurian Dry 12pc",
        "price": "₹200",
        "description": "Crispy vegetable balls tossed in soy-garlic sauce.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Veg%20Manchurian!.jpg"
      },
      {
        "name": "Manchurian Gravy 10pc",
        "price": "₹150",
        "description": "Vegetable balls in a savory Indo-Chinese gravy.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Indian%20Khana_%20Vegetable%20Manchurian%20Gravy%20Recipe%20_%20Veg%20Manchurian%20_%20Indo-Chinese%20Recipes.jpg?updatedAt=1771913487864"
      },
      {
        "name": "Dragon Potato",
        "price": "₹150",
        "description": "Spicy and tangy stir-fried potatoes.",
        "image": "https://ik.imagekit.io/j1fgksdwx/_.jpg"
      }
    ]
  },
  {
    "category": "Noodles",
    "items": [
      {
        "name": "Veg Hakka Noodle",
        "price": "₹150",
        "description": "Stir-fried noodles with mixed vegetables.",
        "image": "https://ik.imagekit.io/j1fgksdwx/hakka%20noodles.jpg?updatedAt=1758211138803"
      },
      {
        "name": "Veg Chowmein",
        "price": "₹200",
        "description": "Classic Indian street-style stir-fried noodles.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Cantonese%20Chow%20Mein_%20An%20Incredible%20Ultimate%20Recipe.jpg"
      },
      {
        "name": "Schezwan Noodles",
        "price": "₹250",
        "description": "Spicy noodles tossed in Schezwan sauce.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Schezwan%20Mushroom%20Noodles.jpg"
      },
      {
        "name": "Cheese Ball 8pc",
        "price": "₹200",
        "description": "Crispy deep-fried balls stuffed with gooey cheese.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Reisb%C3%A4llchen%20aus%20dem%20Airfryer%20_%20knuspriger%20Snack%20zur%20Resteverwertung.jpg?updatedAt=1771393410264"
      }
    ]
  },
  {
    "category": "Tandoori Snacks",
    "items": [
      {
        "name": "Dahi Kabab",
        "price": "₹220",
        "description": "Soft and creamy yogurt-based fried kebabs.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Dahi%20Ke%20Kebab%20Recipe%20_%20Dahi%20Kebab%20_%20Greek%20Yogurt%20Kebabs%20Recipe%20-%20Complete%20Guide.jpg?updatedAt=1771399598659"
      },
      {
        "name": "Hara Bhara Kabab",
        "price": "₹200",
        "description": "Healthy spinach and green pea patties.",
        "image": "https://ik.imagekit.io/j1fgksdwx/HARA%20BHARA%20KEBAB.webp?updatedAt=1758294537556"
      },
      {
        "name": "Paneer Tikka 8pc",
        "price": "₹300",
        "description": "Cottage cheese marinated in spices and grilled.",
        "image": "https://ik.imagekit.io/j1fgksdwx/awesome%20paneer%20tikka.jpg"
      },
      {
        "name": "Paneer Hariyali Tikka",
        "price": "₹300",
        "description": "Paneer marinated in a green mint-coriander paste.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Paneer%20Hariyali%20Tikka%20Recipe_%20How%20to%20Make%20Paneer%20Hariyali%20Tikka%20Recipe%20_%20Homemade%20Paneer%20Hariyali%20Tikka%20Recipe.jpg"
      },
      {
        "name": "Paneer Punjabi Tikka",
        "price": "₹300",
        "description": "Spicy and robust Punjabi style grilled paneer.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Paneer%20Tikka.jpg"
      },
      {
        "name": "Paneer Malai Tikka",
        "price": "₹350",
        "description": "Creamy and mildly spiced grilled cottage cheese.",
        "image": "https://ik.imagekit.io/j1fgksdwx/PANEER%20MALAI%20TIKKA.jpg?updatedAt=1763551273669"
      },
      {
        "name": "Achari Paneer Tikka 8pc",
        "price": "₹300",
        "description": "Paneer marinated in tangy pickling spices.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Restaurant%20Style%20Achari%20Paneer%20Tikka%20Recipe%20_%20Tangy%20&%20Spicy.jpg"
      },
      {
        "name": "Soya Chap",
        "price": "₹250",
        "description": "Protein-rich soya chunks marinated and grilled.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Tandoori%20Soya%20Chaap.jpg?updatedAt=1771394712984"
      },
      {
        "name": "Malai Soya Chap",
        "price": "₹300",
        "description": "Soya chunks in a creamy and mild marinade.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Download%20vegetarian%20soya%20malai%20chaap%20made%20using%20soya%20chaap%20with%20white%20creamy%20gravy%20for%20free.jpg?updatedAt=1771395215799"
      }
    ]
  },
  {
    "category": "Dal",
    "items": [
      {
        "name": "Dal Fry",
        "price": "₹200",
        "description": "Yellow lentils tempered with Indian spices.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Dal%20Fry.jpeg?updatedAt=1759147133157"
      },
      {
        "name": "Dal Tadka",
        "price": "₹230",
        "description": "Lentils with a double tempering of garlic and cumin.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Dal%20tadka.webp?updatedAt=1759147133405"
      },
      {
        "name": "Dal Makhni",
        "price": "₹250",
        "description": "Slow-cooked black lentils with butter and cream.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Dal%20Makhani.gif?updatedAt=1759147134158"
      },
      {
        "name": "Punjabi Dal Tadka",
        "price": "₹170",
        "description": "Spicy and robust Punjabi style tempered lentils.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Punjabi%20Toor%20Dal%20Tadka%20and%20rice%20is%20the%20ultimate%20comfort%20food.jpg?updatedAt=1772360785394"
      },
      {
        "name": "Dal Panch Ratan",
        "price": "₹170",
        "description": "A mix of five lentils cooked with aromatic spices.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Punjabi%20Toor%20Dal%20Tadka%20and%20rice%20is%20the%20ultimate%20comfort%20food.jpg?updatedAt=1772360785394"
      }
    ]
  },
  {
    "category": "Raita",
    "items": [
      {
        "name": "Veg Raita",
        "price": "₹100",
        "description": "Yogurt mixed with finely chopped vegetables.",
        "image": "https://ik.imagekit.io/j1fgksdwx/mix%20raita.jpg?updatedAt=1759147518458"
      },
      {
        "name": "Boondi Raita",
        "price": "₹120",
        "description": "Yogurt mixed with crispy gram flour pearls.",
        "image": "https://ik.imagekit.io/j1fgksdwx/boondi%20raita.webp?updatedAt=1759151509908"
      },
      {
        "name": "Cucumber Raita",
        "price": "₹100",
        "description": "Cooling yogurt mixed with grated cucumber.",
        "image": "https://ik.imagekit.io/j1fgksdwx/cucumber%20raita.webp?updatedAt=1759147133020"
      },
      {
        "name": "Onion Raita",
        "price": "₹100",
        "description": "Yogurt mixed with chopped onions and spices.",
        "image": "https://ik.imagekit.io/j1fgksdwx/onion%20raita.webp?updatedAt=1759147517559"
      },
      {
        "name": "Fry Raita",
        "price": "₹180",
        "description": "Tempered yogurt with spices.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Spiced%20Dahi%20tadka_Tempered%20Yogurt%20curry.jpg"
      },
      {
        "name": "Pineapple Raita",
        "price": "₹150",
        "description": "Sweet and savory yogurt with pineapple chunks.",
        "image": "https://ik.imagekit.io/j1fgksdwx/recipe-pineapple-raita.jpg?updatedAt=1759147889307"
      }
    ]
  },
  {
    "category": "Veg Main Course",
    "items": [
      {
        "name": "Sev Tamatar",
        "price": "₹150",
        "description": "Spicy tomato curry topped with crispy gram flour noodles.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Kathiawadi%20Sev%20Tamatar%20Sabji_%20A%20Tangy%20And%20Spicy%20Side%20Dish%20For%20Meals.jpg?updatedAt=1772352480045"
      },
      {
        "name": "Mix Veg",
        "price": "₹200",
        "description": "Assorted seasonal vegetables cooked in a spiced gravy.",
        "image": "https://ik.imagekit.io/j1fgksdwx/mix%20veg.webp?updatedAt=1759147517677"
      },
      {
        "name": "Chana Masala",
        "price": "₹120",
        "description": "Spicy and tangy chickpea curry.",
        "image": "https://ik.imagekit.io/j1fgksdwx/chana%20masala.webp?updatedAt=1759147037380"
      },
      {
        "name": "Aloo Tomato",
        "price": "₹120",
        "description": "Simple and comforting potato and tomato curry.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Aloo%20Tamatar%20ki%20Sabzi%20-%20Bliss%20of%20Cooking.jpg?updatedAt=1772356486047"
      },
      {
        "name": "Veg Handi",
        "price": "₹200",
        "description": "Mixed vegetables cooked in a traditional clay pot style.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Mixed%20Vegetable%20Handi%20Recipe%20Recipe%20-%20Complete%20Guide.jpg?updatedAt=1772356622484"
      },
      {
        "name": "Mushroom Masala",
        "price": "₹250",
        "description": "Mushrooms cooked in a rich and spicy onion-tomato gravy.",
        "image": "https://ik.imagekit.io/j1fgksdwx/mushroom%20masala.jpg?updatedAt=1759174155100"
      },
      {
        "name": "Veg Kolhapuri",
        "price": "₹200",
        "description": "Spicy and fiery mixed vegetable curry from Kolhapur.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Veg%20Kolhapuri%20Recipe%20_.jpg?updatedAt=1772356728024"
      },
      {
        "name": "Veg Jaipuri",
        "price": "₹220",
        "description": "Mixed vegetables in a rich, slightly sweet gravy.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Veg%20Kolhapuri%20Recipe%20_.jpg?updatedAt=1772356728024"
      },
      {
        "name": "Kashmiri Dum Aloo",
        "price": "₹250",
        "description": "Baby potatoes slow-cooked in a rich yogurt-based gravy.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Kashmiri%20Dum%20Aloo%20-%20Binjal's%20VEG%20Kitchen.jpg?updatedAt=1772359531867"
      }
    ]
  },
  {
    "category": "Shahi Sweet",
    "items": [
      {
        "name": "Malai Kofta",
        "price": "₹300",
        "description": "Deep-fried paneer and potato dumplings in a rich creamy gravy.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Malai%20Kofta.jpg?updatedAt=1759147343212"
      },
      {
        "name": "Navratan Korma",
        "price": "₹250",
        "description": "Nine-gem curry with vegetables, fruits, and nuts in a mild gravy.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Navratan%20Korma%20Recipe_%20Tips%20for%20Making%20Navratan%20Korma%20-%202026%20-%20MasterClass.jpg?updatedAt=1772294066992"
      },
      {
        "name": "Shahi Paneer",
        "price": "₹300",
        "description": "Cottage cheese in a thick, creamy, and nutty gravy.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Shahi%20Paneer.jpg?updatedAt=1759149858267"
      },
      {
        "name": "Methi Malai Matar",
        "price": "₹320",
        "description": "Green peas and fenugreek leaves in a creamy sauce.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Methi-Matar-Malai-2-3.jpg?updatedAt=1759150283553"
      },
      {
        "name": "Kaju Curry",
        "price": "₹300",
        "description": "Roasted cashews simmered in a rich and spicy gravy.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Quick%20and%20Easy%20Kaju%20Curry%20Recipe-%20Perfect%20for%20Any%20Occasion.jpg?updatedAt=1772294497690"
      },
      {
        "name": "Khoya Kaju",
        "price": "₹340",
        "description": "Cashews cooked in a sweet and rich reduced milk gravy.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Khoya%20Kaju.jpg"
      }
    ]
  },
  {
    "category": "Paneer Main Course",
    "items": [
      {
        "name": "Paneer Lababdar",
        "price": "₹350",
        "description": "Cottage cheese in a creamy, tangy, and slightly sweet gravy.",
        "image": "https://ik.imagekit.io/j1fgksdwx/_%E2%9C%A8%20Paneer%20Lababdar%20_%20Creamy,%20Spiced%20&%20Indulgent!%20%E2%9C%A8___A%20rich%20North%20Indian%20curry,%20Paneer%20Lababdar%20features%20soft%20paneer%20cubes%20simmered%20in%20a%20creamy,%20tomato-based%20gravy%20w.%20Add%20paneer%20cubes%20and%20simmer%20until%20they%20absorb%20t___?updatedAt=1772296397977"
      },
      {
        "name": "Paneer Pasanda",
        "price": "₹350",
        "description": "Stuffed paneer sandwiches in a rich and creamy gravy.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Best%20Paneer%20Pasanda%20Recipe%20(Restaurant%20Style)%20-%20Cubes%20N%20Juliennes.jpg?updatedAt=1772296547456"
      },
      {
        "name": "Derawar Special 3 (Varieties)",
        "price": "₹750",
        "description": "Our chef's special trio of signature paneer dishes.",
        "image": "https://ik.imagekit.io/j1fgksdwx/unnamed.jpg?updatedAt=1772297253689"
      },
      {
        "name": "Paneer 2 Pyaza",
        "price": "₹250",
        "description": "Cottage cheese cooked with double the amount of onions.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Paneer%20Do%20Pyaza%20-%20Cooking%20From%20Heart%20(1).jpg?updatedAt=1772297403858"
      },
      {
        "name": "Khoya Paneer",
        "price": "₹280",
        "description": "Paneer cooked with rich reduced milk for a sweet touch.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Khoya%20Paneer.jpg?updatedAt=1772297671811"
      },
      {
        "name": "Paneer Angara",
        "price": "₹350",
        "description": "Smoky and spicy cottage cheese curry.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Gemini_Generated_Image_uso91auso91auso9.png?updatedAt=1772352253820"
      },
      {
        "name": "Matar Paneer",
        "price": "₹180",
        "description": "Classic combination of green peas and cottage cheese.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Matar%20Paneer.webp?updatedAt=1759147518005"
      },
      {
        "name": "Paneer Butter Masala",
        "price": "₹300",
        "description": "Paneer in a rich, creamy, and buttery tomato gravy.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Paneer%20Butter%20Masala.webp?updatedAt=1759147634122"
      },
      {
        "name": "Handi Paneer",
        "price": "₹250",
        "description": "Paneer cooked with bell peppers in a traditional handi.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Paneer%20Handi%20Recipe_%20How%20to%20Make%20Handi%20Paneer%20_%20Paneer%20Recipe.jpg?updatedAt=1772297671980"
      },
      {
        "name": "Kadai Paneer",
        "price": "₹300",
        "description": "Spicy paneer cooked with bell peppers and whole spices.",
        "image": "https://ik.imagekit.io/j1fgksdwx/kadhai%20paneere.jpg?updatedAt=1759175204254"
      },
      {
        "name": "Paneer Bhurji",
        "price": "₹280",
        "description": "Scrambled cottage cheese cooked with onions and tomatoes.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Paneer%20Bhurji.jpg?updatedAt=1772352406461"
      }
    ]
  },
  {
    "category": "Rice",
    "items": [
      {
        "name": "Steam Rice",
        "price": "₹120",
        "description": "Plain, fluffy steamed basmati rice.",
        "image": "https://ik.imagekit.io/j1fgksdwx/stemmed%20rice.webp?updatedAt=1759147891225"
      },
      {
        "name": "Jeera Rice",
        "price": "₹150",
        "description": "Basmati rice tempered with cumin seeds.",
        "image": "https://ik.imagekit.io/j1fgksdwx/jeera-rice-recipe-step-by-step-instructions.webp?updatedAt=1759147269290"
      },
      {
        "name": "Butter Rice",
        "price": "₹140",
        "description": "Steamed rice tossed with rich butter.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Garlic%20Butter%20Rice.jpg?updatedAt=1772360877828"
      },
      {
        "name": "Veg Fried Rice",
        "price": "₹180",
        "description": "Stir-fried rice with mixed vegetables and soy sauce.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Vegetable%20Fried%20Rice%20(Stovetop%20&%20Instant%20Pot).jpg?updatedAt=1772360925783"
      },
      {
        "name": "Paneer Pulao",
        "price": "₹200",
        "description": "Fragrant rice cooked with spiced cottage cheese cubes.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Paneer%20Dahi%20Pulao.jpg?updatedAt=1772360078309"
      },
      {
        "name": "Corn Butter Rice",
        "price": "₹170",
        "description": "Rice cooked with sweet corn and butter.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Hot%20Buttered%20Corn%20Rice%20_%20Recipe%20Tin%20Eats.jpg?updatedAt=1772361045753"
      },
      {
        "name": "Schezwan Fry Rice",
        "price": "₹220",
        "description": "Spicy stir-fried rice with Schezwan sauce.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Szechwan%20Fried%20Rice.jpg?updatedAt=1772709070579"
      },
      {
        "name": "Manchurian Fried Rice",
        "price": "₹200",
        "description": "Fried rice served with vegetable Manchurian.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Vegetable%20Manchurian%20Fried%20Rice%20(1).jpg"
      }
    ]
  },
  {
    "category": "Biryani",
    "items": [
      {
        "name": "Veg Biryani",
        "price": "₹250",
        "description": "Aromatic basmati rice cooked with mixed vegetables and spices.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Easy%20Vegetable%20Biryani.jpg"
      },
      {
        "name": "Veg Hydrabadi Biryani",
        "price": "₹280",
        "description": "Spicy and flavorful authentic Hyderabadi style biryani.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Easy%20Restaurant-style%20Vegetable%20Biryani%20Recipe%20-%20Sandhya's%20Kitchen.jpg"
      },
      {
        "name": "Veg Dum Biryani",
        "price": "₹300",
        "description": "Slow-cooked aromatic rice and vegetable layered dish.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Vegetable%20Dum%20Biryani%20(In%20oven).jpg"
      }
    ]
  },
  {
    "category": "Indian Breads",
    "items": [
      {
        "name": "Tandoori Roti Plain",
        "price": "₹30",
        "description": "Whole wheat flatbread baked in a clay oven.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Butter%20Kulcha%20Recipe-%20Soft%20&%20Flaky%20_%20Cook%20Click%20N%20Devour!!!.jpg?updatedAt=1772363246388"
      },
      {
        "name": "Tandoori Roti Butter",
        "price": "₹50",
        "description": "Clay oven baked flatbread topped with butter.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Tandoori%20Roti.webp?updatedAt=1759150702455"
      },
      {
        "name": "Naan",
        "price": "₹100",
        "description": "Soft and fluffy leavened flatbread baked in a tandoor.",
        "image": "https://ik.imagekit.io/j1fgksdwx/plain%20naan.webp?updatedAt=1759147634181"
      },
      {
        "name": "Butter Naan",
        "price": "₹120",
        "description": "Soft naan bread brushed with generous amounts of butter.",
        "image": "https://ik.imagekit.io/j1fgksdwx/butter%20naan.webp?updatedAt=1759150613034"
      },
      {
        "name": "Garlic Naan",
        "price": "₹150",
        "description": "Naan bread flavored with minced garlic and cilantro.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Delicious%20Garlic%20Naan%20Recipe!%20(1).jpg?updatedAt=1772363012896"
      },
      {
        "name": "Lacha Parantha",
        "price": "₹150",
        "description": "Multi-layered flaky whole wheat flatbread.",
        "image": "https://ik.imagekit.io/j1fgksdwx/lachha%20parathan.jpeg?updatedAt=1759147343079"
      },
      {
        "name": "Tandoori Stuff Kulcha",
        "price": "₹200",
        "description": "Stuffed leavened bread baked in a clay oven.",
        "image": "https://ik.imagekit.io/j1fgksdwx/_%E2%9D%A4.jpg?updatedAt=1772363149739"
      },
      {
        "name": "Missi Roti",
        "price": "70",
        "description": "Spiced gram flour and wheat flatbread.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Missi-Roti-665x482.jpg?updatedAt=1759147517669"
      },
      {
        "name": "Cheese Naan",
        "price": "₹170",
        "description": "Soft naan bread stuffed with melted cheese.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Cheese-Stuffed%20Garlic%20Naan%20_%20soft,%20buttery,%20and%20filled%20with%20gooey%20melted%20cheese!%20_%E2%9C%A8%20Perfect%20as%20a%20side%20dish%20or%20on%20its%20own,%20this%20homemade%20naan%20is%20packed%20with%20garlicky%20goodness!%20______%20Cheese-Stuffed%20Garlic%20Naan%20.jpg?updatedAt=1772363330123"
      },
      {
        "name": "Tawa Chapati Plain",
        "price": "₹20",
        "description": "Simple whole wheat flatbread cooked on a griddle.",
        "image": "https://ik.imagekit.io/j1fgksdwx/tawa-roti-plate-with-wooden-background_950002-600777.jpg?updatedAt=1759150611343"
      },
      {
        "name": "Tawa Chapati Butter",
        "price": "₹30",
        "description": "Griddle-cooked flatbread brushed with butter.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Soft%20Indian%20Roti%20(Chapati)%20Recipe%20_%20Easy%20&%20Authentic%20By%20Maple%20Kitchen.jpg?updatedAt=1772363469620"
      },
      {
        "name": "Bajra Roti",
        "price": "₹70",
        "description": "Healthy and rustic pearl millet flatbread.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Bajra%20Roti.jpg?updatedAt=1772363683153"
      },
      {
        "name": "Rumali Roti",
        "price": "₹100",
        "description": "Paper-thin, soft, and folded flatbread.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Rumali%20Roti%20_%20Homemade%20Roomali%20Roti%20Recipe%20-%20Cooking%20From%20Heart.jpg?updatedAt=1772364071972"
      }
    ]
  },
  {
    "category": "Rajasthani Special",
    "items": [
      {
        "name": "Dal Bati Churma",
        "price": "₹400",
        "description": "Traditional Rajasthani meal of lentils, baked wheat balls, and sweet crumbled cereal.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Dal%20Baati%20Churma.jpg"
      }
    ]
  }
];

const TiltImage = ({ src, alt }: { src: string, alt: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full sm:w-48 md:w-56 lg:w-48 xl:w-56 shrink-0">
      <div
        className="rect-image w-full aspect-[4/3] relative overflow-hidden rounded-xl bg-[var(--color-bg-card)]/50 transform-gpu"
      >
        <div className="rect-image-inner w-full h-full">
          {/* Static Skeleton Loader */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-[var(--color-bg-card)]" />
          )}
          
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ease-out transform-gpu ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, current) => 
            (prev.intersectionRatio > current.intersectionRatio) ? prev : current
          );
          
          const categoryId = mostVisible.target.id;
          const matchedCategory = menuData.find(c => c.category.replace(/\s+/g, '-') === categoryId);
          if (matchedCategory) {
            setActiveCategory(matchedCategory.category);
          }
        }
      },
      {
        rootMargin: '-100px 0px -60% 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    if (navRef.current) {
      const activeElement = navRef.current.querySelector(`[data-category="${activeCategory}"]`) as HTMLElement;
      if (activeElement) {
        const container = navRef.current;
        const scrollLeft = activeElement.offsetLeft - container.offsetWidth / 2 + activeElement.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-texture relative">
      
      {/* Floating Navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden 2xl:flex flex-col gap-4 items-center">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-[var(--color-accent)] opacity-30"></div>
        {menuData.map((section, idx) => {
          const isActive = activeCategory === section.category;
          return (
            <a 
              key={idx} 
              href={`#${section.category.replace(/\s+/g, '-')}`}
              onClick={() => setActiveCategory(section.category)}
              className="group relative flex items-center justify-center w-6 h-6"
            >
              <div className={`w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] transition-all duration-300 ${isActive ? 'opacity-100 scale-150 shadow-[0_0_10px_rgba(212,175,55,0.8)]' : 'opacity-30 group-hover:opacity-100 group-hover:scale-150'}`}></div>
              <span className={`absolute right-8 transition-opacity duration-300 font-cinzel text-[var(--color-accent)] text-xs whitespace-nowrap tracking-widest ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                {section.category}
              </span>
            </a>
          );
        })}
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-[var(--color-accent)] opacity-30"></div>
      </div>

      <div className="content-wrapper max-w-[1400px] mx-auto px-4 py-16 sm:px-6 lg:px-12 relative z-10">
        
        {/* Jharokha Top Border */}
        <div className="w-full relative z-20 -mb-[1px]">
          <JharokhaTop />
        </div>

        <div className="border-x-2 border-b-2 border-t-0 border-[var(--color-accent)]/40 rounded-b-3xl p-6 md:p-12 bg-[var(--color-bg-card)]/80 shadow-2xl relative z-10 pt-0">
          {/* Corner Ornaments */}
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[var(--color-accent)] opacity-60"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[var(--color-accent)] opacity-60"></div>
          
        {/* Header */}
        <header className="text-center mb-8 flex flex-col items-center pt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ perspective: 1000 }}
          >
            <motion.img 
              animate={{ 
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              src="https://ik.imagekit.io/j1fgksdwx/Derawar%20(6).png" 
              alt="Derawar Logo" 
              referrerPolicy="no-referrer"
              className="w-72 md:w-96 lg:w-[32rem] mb-2 object-contain transform-gpu"
            />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-inter font-light tracking-[0.3em] text-sm md:text-base text-[var(--color-accent-muted)] uppercase"
          >
            Heritage Dining Experience
          </motion.p>
        </header>

        {/* Category Navigation (Horizontal Scroll) */}
        <div className="sticky top-0 z-40 w-auto mb-8 -mx-6 md:-mx-12 bg-[var(--color-bg-card)]/90 backdrop-blur-md border-y border-[var(--color-accent)]/20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="relative py-4 px-6 md:px-12"
          >
            {/* Fading edges for scroll indication */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[var(--color-bg-card)] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[var(--color-bg-card)] to-transparent z-10 pointer-events-none"></div>
            
            <div 
              ref={navRef}
              className="flex items-center gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth relative z-0 px-4"
            >
              {menuData.map((section, idx) => {
                const isActive = activeCategory === section.category;
                return (
                  <a
                    key={idx}
                    href={`#${section.category.replace(/\s+/g, '-')}`}
                    data-category={section.category}
                    onClick={() => setActiveCategory(section.category)}
                    className={`px-5 py-2 rounded-full border transition-all duration-300 font-cinzel text-xs md:text-sm tracking-widest whitespace-nowrap flex-shrink-0 ${
                      isActive 
                        ? 'bg-[var(--color-accent)] text-[var(--color-bg)] border-[var(--color-accent)] shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                        : 'border-[var(--color-accent)]/40 text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 shadow-[0_0_10px_rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                    }`}
                  >
                    {section.category}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Menu Sections */}
        <main className="space-y-20">
          {menuData.map((section, idx) => (
            <section key={idx} id={section.category.replace(/\s+/g, '-')} className="relative pt-8 scroll-mt-32">
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center mb-12"
              >
                <Ornament />
                <div className="flex items-center justify-center mt-6">
                  <div className="w-12 md:w-24 h-px bg-gradient-to-r from-transparent to-[var(--color-accent)] opacity-50"></div>
                  <h2 className="mx-6 font-cinzel text-4xl md:text-6xl text-[var(--color-accent)] tracking-[0.2em] uppercase text-glow text-center">
                    {section.category}
                  </h2>
                  <div className="w-12 md:w-24 h-px bg-gradient-to-l from-transparent to-[var(--color-accent)] opacity-50"></div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 lg:gap-x-12 xl:gap-x-16 xl:gap-y-12">
                {section.items.map((item, itemIdx) => (
                  <motion.div 
                    key={itemIdx} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: (itemIdx % 4) * 0.1 }}
                    className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 md:gap-6 group relative p-4 sm:p-6 -mx-4 sm:-mx-6 rounded-2xl transition-colors duration-500 hover:bg-[var(--color-accent)]/5 hover:shadow-[inset_0_0_30px_rgba(212,175,55,0.05)] transform-gpu"
                  >
                    {item.image && (
                      <div className="shrink-0 relative z-10">
                        <TiltImage src={item.image} alt={item.name} />
                      </div>
                    )}
                    
                      <div className="flex flex-col justify-center flex-grow w-full relative z-10">
                        <div className="flex flex-col xl:flex-row xl:items-baseline justify-between w-full mb-1 gap-1 xl:gap-4">
                          <motion.h3 
                            whileHover={{ scale: 1.02, color: "var(--color-accent)", originX: 0 }}
                            className="font-cormorant text-2xl md:text-3xl font-medium text-[var(--color-text-main)] transition-colors cursor-default flex items-center justify-center sm:justify-start gap-3"
                          >
                            <span className="text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm hidden sm:inline-block">✦</span>
                            {item.name}
                          </motion.h3>
                          
                          <span className="font-cinzel text-xl text-[var(--color-accent)] tracking-widest whitespace-nowrap xl:ml-4">
                            {item.price}
                          </span>
                        </div>
                        
                        <div className="h-px w-full bg-gradient-to-r from-[var(--color-accent-muted)] to-transparent opacity-30 mb-2"></div>
                        
                        {item.description && (
                          <p className="text-[var(--color-text-muted)] text-sm md:text-base font-inter italic opacity-80 mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </main>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-40 pt-12 border-t border-[var(--color-accent)]/20 text-center flex flex-col items-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05, rotateZ: 2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center space-x-3 border border-[var(--color-accent)]/30 rounded-full px-8 py-4 bg-[var(--color-bg-card)]/50 backdrop-blur-md hover:bg-[var(--color-accent)]/10 transition-colors cursor-pointer group shadow-[0_0_30px_rgba(212,175,55,0.1)]"
          >
            <Instagram className="w-5 h-5 text-[var(--color-accent)] group-hover:scale-110 transition-transform" />
            <span className="font-inter font-light tracking-[0.2em] text-[var(--color-text-main)] text-sm uppercase">
              @qreativemenus
            </span>
          </motion.div>
        </motion.footer>

        </div>
      </div>
    </div>
  );
}
