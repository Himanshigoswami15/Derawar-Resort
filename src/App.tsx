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
  <svg viewBox="0 0 1200 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24 md:h-32 lg:h-48 text-[var(--color-accent)] block drop-shadow-2xl">
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
        "price": "₹10",
        "description": "Classic brewed black tea.",
        "image": "https://ik.imagekit.io/j1fgksdwx/25%20Homemade%20Tea%20Recipes%20for%20a%20Perfect%20Brew.jpg"
      },
      {
        "name": "Masala Tea",
        "price": "₹20",
        "description": "Spiced Indian tea with aromatic herbs.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Masala%20Chai%20(Spiced%20Tea)_Warm,%20spiced,%20and%20soul-soothing%20__%20The%20perfect%20sip%20to%20wind%20down%20the%20day__Why%20we%20love%20it_%20It_s%20bold,%20comforting,%20and%20fills%20your%20kitchen%20with%20cozy%20aromas.__.__MasalaChai%20_EveningSips%20_ChaiVibes"
      },
      {
        "name": "Coffee",
        "price": "₹30",
        "description": "Freshly brewed hot coffee.",
        "image": "https://ik.imagekit.io/j1fgksdwx/regular%20coffee.jpg?updatedAt=1759174155086"
      },
      {
        "name": "Cold Coffee",
        "price": "₹50",
        "description": "Chilled blended coffee with milk.",
        "image": "https://ik.imagekit.io/j1fgksdwx/cold%20coffee.jpg?updatedAt=1759174012948"
      },
      {
        "name": "Lassi",
        "price": "₹60",
        "description": "Traditional yogurt-based drink.",
        "image": "https://ik.imagekit.io/j1fgksdwx/lassi.jpg?updatedAt=1759174013497"
      },
      {
        "name": "Makhaniya Lassi",
        "price": "₹80",
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
        "price": "₹90",
        "description": "Sweet and creamy mango blend.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Summer%20Mango%20Coconut%20Float%20Milkshake_%20Tropical___.jpg"
      },
      {
        "name": "Pineapple Shake",
        "price": "₹100",
        "description": "Tropical pineapple milkshake.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Homemade%20Pineapple%20Milkshake%20Recipe%20-%20Ninja%20Creami%20Ice%20Cream%20Recipes%20_Healthy%20Protein%20Recipes_.jpg"
      },
      {
        "name": "Chocolat Shake",
        "price": "₹80",
        "description": "Rich chocolate blended with milk.",
        "image": "https://ik.imagekit.io/j1fgksdwx/11%20Easy%20&%20Healthy%20Breakfast%20Smoothie%20Recipes!.jpg"
      },
      {
        "name": "Banana Shake",
        "price": "₹80",
        "description": "Smooth and creamy banana shake.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Banana%20Ice-cream.jpg"
      },
      {
        "name": "Strawberry Shake",
        "price": "₹80",
        "description": "Sweet strawberry flavored milkshake.",
        "image": ""
      }
    ]
  },
  {
    "category": "Soup",
    "items": [
      {
        "name": "Veg Sweet Corn Soup",
        "price": "₹180",
        "description": "Comforting soup with sweet corn kernels.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Corn%20Soup.jpg"
      },
      {
        "name": "Veg Clear Soup",
        "price": "₹180",
        "description": "Light and healthy vegetable broth.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Sweet%20Corn%20Clear%20Soup%20Recipe%20_%20Cook%20Click%20N%20Devour!!!.jpg"
      },
      {
        "name": "Veg Hot and Sour Soup",
        "price": "₹180",
        "description": "Spicy and tangy vegetable soup.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Vegetarian%20hot%20and%20sour%20soup%20is%20an%20easy%20to%20make%20meal%20for%20cold%20days_%20It%20is%20packed%20with%20vegetables,%20lightly%20seasoned%20and%20super%20comforting!.jpg"
      },
      {
        "name": "Veg Manchaw Soup",
        "price": "₹200",
        "description": "Spicy Indo-Chinese soup with crispy noodles.",
        "image": "https://ik.imagekit.io/j1fgksdwx/212K%20views%20_%202_7K%20reactions%20_%20Restaurant%20Style%20Veg%20Manchow%20Soup%20Recipe%20_%20%E0%A4%B5%E0%A5%87%E0%A4%9C%20%E0%A4%AE%E0%A4%A8%E0%A4%9A%E0%A4%BE%E0%A4%93%20%E0%A4%B8%E0%A5%82%E0%A4%AA%20_%20Chef%20Sanjyot%20Keer%20_%20Your%20Food%20Lab%20_%20Facebook.jpg"
      },
      {
        "name": "Cream of Tomato",
        "price": "₹170",
        "description": "Rich and creamy tomato soup.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Roasted%20Tomato%20Soup.jpg"
      },
      {
        "name": "Cream of Mushroom Soup",
        "price": "₹180",
        "description": "Velvety soup with fresh mushrooms.",
        "image": "https://ik.imagekit.io/j1fgksdwx/CREAM%20OF%20MUSHROOM%20SOUP.jpg?updatedAt=1759147132959"
      },
      {
        "name": "Lemon Coriander Soup",
        "price": "₹200",
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
        "price": "₹20",
        "description": "Freshly sliced onions with lemon and chaat masala.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Sumac%20Onions%20(Turkish%20Onion%20Salad).jpg?updatedAt=1772378441744"
      },
      {
        "name": "Tomato Salad",
        "price": "₹30",
        "description": "Fresh tomato slices with light seasoning.",
        "image": "https://ik.imagekit.io/j1fgksdwx/My%20favourite%20Tomato%20Salad%20(1).jpg?updatedAt=1772378441737"
      },
      {
        "name": "Green Salad",
        "price": "₹60",
        "description": "Assorted fresh seasonal vegetables.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Try%20this%20fresh%20mixed%20green%20salad%20with%20tangy%20balsamic%20vinaigrette,%20packed%20with%20crisp%20greens%20and%20veggies_%20Simple,%20delicious,%20and%20healthy!%20_%20Mixed%20Greens%20Salad%20_%20Easy%20Side%20Salad%20Recipe%20_%20Salad%20Recipes%20_.jpg"
      },
      {
        "name": "Cucumber Salad",
        "price": "₹50",
        "description": "Cool and crisp cucumber slices.",
        "image": "https://ik.imagekit.io/j1fgksdwx/Cucumber%20Salad%20with%20Herb%20Garlic%20Vinaigrette.jpg?updatedAt=1772378441759"
      },
      {
        "name": "Russian Salad",
        "price": "₹80",
        "description": "Mixed vegetables and fruits in creamy mayo dressing.",
        "image": "https://ik.imagekit.io/j1fgksdwx/RUSSIAN%20SALAD.webp?updatedAt=1759147890223"
      },
      {
        "name": "Kachumber Salad",
        "price": "₹50",
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
        "price": "₹200",
        "description": "Crispy roll stuffed with melted cheese.",
        "image": ""
      },
      {
        "name": "Veg Cheese Spring Roll",
        "price": "₹220",
        "description": "Crispy rolls with vegetables and cheese.",
        "image": ""
      },
      {
        "name": "Veg Spring Roll",
        "price": "₹210",
        "description": "Classic crispy vegetable stuffed rolls.",
        "image": ""
      },
      {
        "name": "Paneer Roll",
        "price": "₹220",
        "description": "Spiced cottage cheese wrapped in a flatbread.",
        "image": ""
      }
    ]
  },
  {
    "category": "Roasted",
    "items": [
      {
        "name": "Roasted Papad",
        "price": "₹30",
        "description": "Crispy roasted lentil wafer.",
        "image": ""
      },
      {
        "name": "Masala Roasted Papad",
        "price": "₹50",
        "description": "Roasted wafer topped with spicy onion-tomato mix.",
        "image": ""
      },
      {
        "name": "Fry Papad",
        "price": "₹40",
        "description": "Deep-fried crispy lentil wafer.",
        "image": ""
      },
      {
        "name": "Fry Masala Papad",
        "price": "₹60",
        "description": "Fried wafer with spicy vegetable topping.",
        "image": ""
      },
      {
        "name": "Plain Khichiya",
        "price": "₹50",
        "description": "Traditional roasted rice flour cracker.",
        "image": ""
      },
      {
        "name": "Masala Khichiya",
        "price": "₹80",
        "description": "Rice cracker topped with spicy masala.",
        "image": ""
      },
      {
        "name": "Cheese Masala Khichiya",
        "price": "₹100",
        "description": "Spicy rice cracker loaded with cheese.",
        "image": ""
      }
    ]
  },
  {
    "category": "Breakfast",
    "items": [
      {
        "name": "Butter Poha",
        "price": "₹50",
        "description": "Flattened rice cooked with spices and topped with butter.",
        "image": ""
      },
      {
        "name": "Plain Poha",
        "price": "₹30",
        "description": "Light and healthy flattened rice breakfast.",
        "image": ""
      },
      {
        "name": "Masala Poha",
        "price": "₹60",
        "description": "Spicy and tangy flattened rice.",
        "image": ""
      },
      {
        "name": "Veg Upma",
        "price": "₹70",
        "description": "Savory semolina porridge with vegetables.",
        "image": ""
      },
      {
        "name": "Masala Dosa",
        "price": "₹100",
        "description": "Crispy crepe stuffed with spiced potato filling.",
        "image": ""
      },
      {
        "name": "Plain Dosa",
        "price": "₹70",
        "description": "Classic thin and crispy South Indian crepe.",
        "image": ""
      },
      {
        "name": "Rava Dosa",
        "price": "₹120",
        "description": "Crispy semolina crepe with spices.",
        "image": ""
      },
      {
        "name": "Pav Bhaji",
        "price": "₹70",
        "description": "Spicy mixed vegetable mash served with buttered bread.",
        "image": ""
      },
      {
        "name": "Extra Pav (1pc)",
        "price": "₹20",
        "description": "Additional buttered bread roll.",
        "image": ""
      }
    ]
  },
  {
    "category": "Paratha",
    "items": [
      {
        "name": "Aloo Paratha",
        "price": "₹50",
        "description": "Whole wheat flatbread stuffed with spiced potatoes.",
        "image": ""
      },
      {
        "name": "Gobi Paratha",
        "price": "₹60",
        "description": "Flatbread stuffed with spiced cauliflower.",
        "image": ""
      },
      {
        "name": "Paneer Paratha",
        "price": "₹80",
        "description": "Flatbread stuffed with seasoned cottage cheese.",
        "image": ""
      },
      {
        "name": "Mix Veg Paratha",
        "price": "₹60",
        "description": "Flatbread stuffed with mixed vegetables.",
        "image": ""
      },
      {
        "name": "Onion Paratha",
        "price": "₹40",
        "description": "Flatbread stuffed with spiced onions.",
        "image": ""
      },
      {
        "name": "Palak Paratha",
        "price": "₹60",
        "description": "Healthy flatbread made with spinach.",
        "image": ""
      },
      {
        "name": "Plain Paratha",
        "price": "₹40",
        "description": "Classic flaky whole wheat flatbread.",
        "image": ""
      }
    ]
  },
  {
    "category": "Maggie",
    "items": [
      {
        "name": "Plain Maggie",
        "price": "₹40",
        "description": "Classic instant noodles.",
        "image": ""
      },
      {
        "name": "Masala Maggie",
        "price": "₹50",
        "description": "Instant noodles cooked with extra spices.",
        "image": ""
      },
      {
        "name": "Cheese Maggie",
        "price": "₹60",
        "description": "Cheesy and creamy instant noodles.",
        "image": "0"
      }
    ]
  },
  {
    "category": "Pakoda",
    "items": [
      {
        "name": "Aloo Pakoda 8pc",
        "price": "₹60",
        "description": "Crispy deep-fried potato fritters.",
        "image": ""
      },
      {
        "name": "Onion Pakoda 8pc",
        "price": "₹60",
        "description": "Crispy deep-fried onion fritters.",
        "image": ""
      },
      {
        "name": "Paneer Pakoda 8pc",
        "price": "₹100",
        "description": "Cottage cheese cubes fried in spiced batter.",
        "image": ""
      },
      {
        "name": "Mix Veg Pakoda 10pc",
        "price": "₹80",
        "description": "Assorted vegetable fritters.",
        "image": ""
      }
    ]
  },
  {
    "category": "Sandwich",
    "items": [
      {
        "name": "Veg Sandwich",
        "price": "₹50",
        "description": "Fresh vegetables layered between bread slices.",
        "image": ""
      },
      {
        "name": "Veg Grill Sandwich",
        "price": "₹60",
        "description": "Grilled sandwich with mixed vegetables.",
        "image": ""
      },
      {
        "name": "Veg Cheese Sandwich",
        "price": "₹80",
        "description": "Vegetable sandwich loaded with cheese.",
        "image": ""
      },
      {
        "name": "Veg Paneer Tikka Sandwich",
        "price": "₹100",
        "description": "Sandwich stuffed with spiced paneer tikka.",
        "image": ""
      },
      {
        "name": "Veg Club Sandwich",
        "price": "₹120",
        "description": "Multi-layered sandwich with veggies and cheese.",
        "image": ""
      }
    ]
  },
  {
    "category": "Burger",
    "items": [
      {
        "name": "Veg Burger",
        "price": "₹60",
        "description": "Burger with a crispy vegetable patty.",
        "image": ""
      },
      {
        "name": "Veg Cheese Burger",
        "price": "₹80",
        "description": "Vegetable burger topped with a cheese slice.",
        "image": ""
      }
    ]
  },
  {
    "category": "Pizza",
    "items": [
      {
        "name": "Onion Capsicum Pizza",
        "price": "₹120",
        "description": "Pizza topped with fresh onions and capsicum.",
        "image": ""
      },
      {
        "name": "Cheese Margarita",
        "price": "₹150",
        "description": "Classic pizza with rich tomato sauce and cheese.",
        "image": ""
      },
      {
        "name": "Double Cheese",
        "price": "₹160",
        "description": "Pizza loaded with extra mozzarella cheese.",
        "image": ""
      },
      {
        "name": "Veg Cheese Pizza",
        "price": "₹150",
        "description": "Pizza topped with mixed vegetables and cheese.",
        "image": ""
      },
      {
        "name": "Paneer Pizza",
        "price": "₹180",
        "description": "Pizza topped with spiced cottage cheese cubes.",
        "image": ""
      },
      {
        "name": "Sweet Corn Cheese",
        "price": "₹120",
        "description": "Pizza topped with sweet corn and cheese.",
        "image": ""
      },
      {
        "name": "Mushroom Pizza",
        "price": "₹130",
        "description": "Pizza topped with fresh mushrooms.",
        "image": ""
      },
      {
        "name": "Paneer Tikka Pizza",
        "price": "₹150",
        "description": "Pizza topped with tandoori paneer tikka.",
        "image": ""
      }
    ]
  },
  {
    "category": "Pasta",
    "items": [
      {
        "name": "White Sauce Pasta",
        "price": "₹100",
        "description": "Pasta tossed in a creamy and cheesy white sauce.",
        "image": ""
      },
      {
        "name": "Red Sauce Pasta",
        "price": "₹120",
        "description": "Pasta tossed in a tangy and spicy tomato sauce.",
        "image": ""
      },
      {
        "name": "Pink Sauce Pasta",
        "price": "₹130",
        "description": "Pasta in a mix of creamy white and tangy red sauce.",
        "image": ""
      }
    ]
  },
  {
    "category": "Chinese",
    "items": [
      {
        "name": "Crispy Corn",
        "price": "₹110",
        "description": "Deep-fried sweet corn kernels tossed in spices.",
        "image": ""
      },
      {
        "name": "American Corn",
        "price": "₹120",
        "description": "Buttered and seasoned sweet corn.",
        "image": ""
      },
      {
        "name": "French Fry",
        "price": "₹100",
        "description": "Classic crispy deep-fried potato strips.",
        "image": ""
      },
      {
        "name": "Peri Peri French Fry",
        "price": "₹120",
        "description": "French fries tossed in spicy peri peri seasoning.",
        "image": ""
      },
      {
        "name": "Honey Chilli Potato",
        "price": "₹140",
        "description": "Crispy potatoes tossed in a sweet and spicy sauce.",
        "image": "https://picsum.photos/seed/HoneyChilliPotato/800/600"
      },
      {
        "name": "Chili Paneer Dry",
        "price": "₹150",
        "description": "Spicy stir-fried cottage cheese cubes.",
        "image": "https://picsum.photos/seed/ChiliPaneerDry/800/600"
      },
      {
        "name": "Chili Paneer Gravy",
        "price": "₹160",
        "description": "Cottage cheese in a spicy Indo-Chinese gravy.",
        "image": "https://picsum.photos/seed/ChiliPaneerGravy/800/600"
      },
      {
        "name": "Veg Crispy",
        "price": "₹100",
        "description": "Assorted vegetables fried crisp and tossed in sauce.",
        "image": "https://picsum.photos/seed/VegCrispy/800/600"
      },
      {
        "name": "Mushroom Chili",
        "price": "₹150",
        "description": "Spicy stir-fried mushrooms with bell peppers.",
        "image": "https://picsum.photos/seed/MushroomChili/800/600"
      },
      {
        "name": "Baby Corn Chili",
        "price": "₹150",
        "description": "Crispy baby corn tossed in spicy chili sauce.",
        "image": "https://picsum.photos/seed/BabyCornChili/800/600"
      },
      {
        "name": "Paneer 65",
        "price": "₹170",
        "description": "Spicy, deep-fried South Indian style paneer.",
        "image": "https://picsum.photos/seed/Paneer65/800/600"
      },
      {
        "name": "Manchurian Dry 12pc",
        "price": "₹100",
        "description": "Crispy vegetable balls tossed in soy-garlic sauce.",
        "image": "https://picsum.photos/seed/ManchurianDry12pc/800/600"
      },
      {
        "name": "Manchurian Gravy 12pc",
        "price": "₹110",
        "description": "Vegetable balls in a savory Indo-Chinese gravy.",
        "image": "https://picsum.photos/seed/ManchurianGravy12pc/800/600"
      },
      {
        "name": "Dragon Potato",
        "price": "₹120",
        "description": "Spicy and tangy stir-fried potatoes.",
        "image": "https://picsum.photos/seed/DragonPotato/800/600"
      }
    ]
  },
  {
    "category": "Noodles",
    "items": [
      {
        "name": "Veg Hakka Noodle",
        "price": "₹100",
        "description": "Stir-fried noodles with mixed vegetables.",
        "image": "https://picsum.photos/seed/VegHakkaNoodle/800/600"
      },
      {
        "name": "Veg Chowmein",
        "price": "₹80",
        "description": "Classic Indian street-style stir-fried noodles.",
        "image": "https://picsum.photos/seed/VegChowmein/800/600"
      },
      {
        "name": "Schezwan Noodles",
        "price": "₹100",
        "description": "Spicy noodles tossed in Schezwan sauce.",
        "image": "https://picsum.photos/seed/SchezwanNoodles/800/600"
      },
      {
        "name": "Cheese Ball 8pc",
        "price": "₹150",
        "description": "Crispy deep-fried balls stuffed with gooey cheese.",
        "image": "https://picsum.photos/seed/CheeseBall8pc/800/600"
      }
    ]
  },
  {
    "category": "Tandoori Snacks",
    "items": [
      {
        "name": "Dahi Kabab",
        "price": "₹200",
        "description": "Soft and creamy yogurt-based fried kebabs.",
        "image": "https://picsum.photos/seed/DahiKabab/800/600"
      },
      {
        "name": "Hara Bhara Kabab",
        "price": "₹180",
        "description": "Healthy spinach and green pea patties.",
        "image": "https://picsum.photos/seed/HaraBharaKabab/800/600"
      },
      {
        "name": "Paneer Tikka 8pc",
        "price": "₹200",
        "description": "Cottage cheese marinated in spices and grilled.",
        "image": "https://picsum.photos/seed/PaneerTikka8pc/800/600"
      },
      {
        "name": "Paneer Hariyali Tikka",
        "price": "₹220",
        "description": "Paneer marinated in a green mint-coriander paste.",
        "image": "https://picsum.photos/seed/PaneerHariyaliTikka/800/600"
      },
      {
        "name": "Paneer Punjabi Tikka",
        "price": "₹240",
        "description": "Spicy and robust Punjabi style grilled paneer.",
        "image": "https://picsum.photos/seed/PaneerPunjabiTikka/800/600"
      },
      {
        "name": "Paneer Malai Tikka",
        "price": "₹250",
        "description": "Creamy and mildly spiced grilled cottage cheese.",
        "image": "https://picsum.photos/seed/PaneerMalaiTikka/800/600"
      },
      {
        "name": "Achari Paneer Tikka 8pc",
        "price": "₹210",
        "description": "Paneer marinated in tangy pickling spices.",
        "image": "https://picsum.photos/seed/AchariPaneerTikka8pc/800/600"
      },
      {
        "name": "Soya Chap",
        "price": "₹200",
        "description": "Protein-rich soya chunks marinated and grilled.",
        "image": "https://picsum.photos/seed/SoyaChap/800/600"
      },
      {
        "name": "Malai Soya Chap",
        "price": "₹250",
        "description": "Soya chunks in a creamy and mild marinade.",
        "image": "https://picsum.photos/seed/MalaiSoyaChap/800/600"
      }
    ]
  },
  {
    "category": "Dal",
    "items": [
      {
        "name": "Dal Fry",
        "price": "₹100",
        "description": "Yellow lentils tempered with Indian spices.",
        "image": "https://picsum.photos/seed/DalFry/800/600"
      },
      {
        "name": "Dal Tadka",
        "price": "₹120",
        "description": "Lentils with a double tempering of garlic and cumin.",
        "image": "https://picsum.photos/seed/DalTadka/800/600"
      },
      {
        "name": "Dal Makhni",
        "price": "₹160",
        "description": "Slow-cooked black lentils with butter and cream.",
        "image": "https://picsum.photos/seed/DalMakhni/800/600"
      },
      {
        "name": "Punjabi Dal Tadka",
        "price": "₹150",
        "description": "Spicy and robust Punjabi style tempered lentils.",
        "image": "https://picsum.photos/seed/PunjabiDalTadka/800/600"
      },
      {
        "name": "Dal Panch Ratan",
        "price": "₹150",
        "description": "A mix of five lentils cooked with aromatic spices.",
        "image": "https://picsum.photos/seed/DalPanchRatan/800/600"
      }
    ]
  },
  {
    "category": "Raita",
    "items": [
      {
        "name": "Veg Raita",
        "price": "₹80",
        "description": "Yogurt mixed with finely chopped vegetables.",
        "image": "https://picsum.photos/seed/VegRaita/800/600"
      },
      {
        "name": "Boondi Raita",
        "price": "₹100",
        "description": "Yogurt mixed with crispy gram flour pearls.",
        "image": "https://picsum.photos/seed/BoondiRaita/800/600"
      },
      {
        "name": "Cucumber Raita",
        "price": "₹80",
        "description": "Cooling yogurt mixed with grated cucumber.",
        "image": "https://picsum.photos/seed/CucumberRaita/800/600"
      },
      {
        "name": "Onion Raita",
        "price": "₹80",
        "description": "Yogurt mixed with chopped onions and spices.",
        "image": "https://picsum.photos/seed/OnionRaita/800/600"
      },
      {
        "name": "Fry Raita",
        "price": "₹150",
        "description": "Tempered yogurt with spices.",
        "image": "https://picsum.photos/seed/FryRaita/800/600"
      },
      {
        "name": "Pineapple Raita",
        "price": "₹100",
        "description": "Sweet and savory yogurt with pineapple chunks.",
        "image": "https://picsum.photos/seed/PineappleRaita/800/600"
      }
    ]
  },
  {
    "category": "Veg Main Course",
    "items": [
      {
        "name": "Sev Tamatar",
        "price": "₹120",
        "description": "Spicy tomato curry topped with crispy gram flour noodles.",
        "image": "https://picsum.photos/seed/SevTamatar/800/600"
      },
      {
        "name": "Mix Veg",
        "price": "₹140",
        "description": "Assorted seasonal vegetables cooked in a spiced gravy.",
        "image": "https://picsum.photos/seed/MixVeg/800/600"
      },
      {
        "name": "Chana Masala",
        "price": "₹100",
        "description": "Spicy and tangy chickpea curry.",
        "image": "https://picsum.photos/seed/ChanaMasala/800/600"
      },
      {
        "name": "Aloo Tomato",
        "price": "₹100",
        "description": "Simple and comforting potato and tomato curry.",
        "image": "https://picsum.photos/seed/AlooTomato/800/600"
      },
      {
        "name": "Veg Handi",
        "price": "₹150",
        "description": "Mixed vegetables cooked in a traditional clay pot style.",
        "image": "https://picsum.photos/seed/VegHandi/800/600"
      },
      {
        "name": "Mushroom Masala",
        "price": "₹180",
        "description": "Mushrooms cooked in a rich and spicy onion-tomato gravy.",
        "image": "https://picsum.photos/seed/MushroomMasala/800/600"
      },
      {
        "name": "Veg Chola Puri",
        "price": "₹160",
        "description": "Spicy chickpea curry served with deep-fried bread.",
        "image": "https://picsum.photos/seed/VegCholaPuri/800/600"
      },
      {
        "name": "Veg Kolhapuri",
        "price": "₹160",
        "description": "Spicy and fiery mixed vegetable curry from Kolhapur.",
        "image": "https://picsum.photos/seed/VegKolhapuri/800/600"
      },
      {
        "name": "Veg Jaipuri",
        "price": "₹170",
        "description": "Mixed vegetables in a rich, slightly sweet gravy.",
        "image": "https://picsum.photos/seed/VegJaipuri/800/600"
      },
      {
        "name": "Kashmiri Dum Aloo",
        "price": "₹180",
        "description": "Baby potatoes slow-cooked in a rich yogurt-based gravy.",
        "image": "https://picsum.photos/seed/KashmiriDumAloo/800/600"
      }
    ]
  },
  {
    "category": "Shahi Sweet",
    "items": [
      {
        "name": "Malai Kofta",
        "price": "₹150",
        "description": "Deep-fried paneer and potato dumplings in a rich creamy gravy.",
        "image": "https://picsum.photos/seed/MalaiKofta/800/600"
      },
      {
        "name": "Navratan Korma",
        "price": "₹180",
        "description": "Nine-gem curry with vegetables, fruits, and nuts in a mild gravy.",
        "image": "https://picsum.photos/seed/NavratanKorma/800/600"
      },
      {
        "name": "Shahi Paneer",
        "price": "₹200",
        "description": "Cottage cheese in a thick, creamy, and nutty gravy.",
        "image": "https://picsum.photos/seed/ShahiPaneer/800/600"
      },
      {
        "name": "Methi Malai Matar",
        "price": "₹180",
        "description": "Green peas and fenugreek leaves in a creamy sauce.",
        "image": "https://picsum.photos/seed/MethiMalaiMatar/800/600"
      },
      {
        "name": "Kaju Curry",
        "price": "₹150",
        "description": "Roasted cashews simmered in a rich and spicy gravy.",
        "image": "https://picsum.photos/seed/KajuCurry/800/600"
      },
      {
        "name": "Khoya Kaju",
        "price": "₹150",
        "description": "Cashews cooked in a sweet and rich reduced milk gravy.",
        "image": "https://picsum.photos/seed/KhoyaKaju/800/600"
      }
    ]
  },
  {
    "category": "Paneer Main Course",
    "items": [
      {
        "name": "Paneer Lababdar",
        "price": "₹180",
        "description": "Cottage cheese in a creamy, tangy, and slightly sweet gravy.",
        "image": "https://picsum.photos/seed/PaneerLababdar/800/600"
      },
      {
        "name": "Paneer Pasanda",
        "price": "₹220",
        "description": "Stuffed paneer sandwiches in a rich and creamy gravy.",
        "image": "https://picsum.photos/seed/PaneerPasanda/800/600"
      },
      {
        "name": "Derawar Special 3 (Varieties)",
        "price": "₹600",
        "description": "Our chef's special trio of signature paneer dishes.",
        "image": "https://picsum.photos/seed/DerawarSpecial3Varieties/800/600"
      },
      {
        "name": "Paneer 2 Pyaza",
        "price": "₹210",
        "description": "Cottage cheese cooked with double the amount of onions.",
        "image": "https://picsum.photos/seed/Paneer2Pyaza/800/600"
      },
      {
        "name": "Khoya Paneer",
        "price": "₹220",
        "description": "Paneer cooked with rich reduced milk for a sweet touch.",
        "image": "https://picsum.photos/seed/KhoyaPaneer/800/600"
      },
      {
        "name": "Paneer Angara",
        "price": "₹280",
        "description": "Smoky and spicy cottage cheese curry.",
        "image": "https://picsum.photos/seed/PaneerAngara/800/600"
      },
      {
        "name": "Matar Paneer",
        "price": "₹150",
        "description": "Classic combination of green peas and cottage cheese.",
        "image": "https://picsum.photos/seed/MatarPaneer/800/600"
      },
      {
        "name": "Paneer Butter Masala",
        "price": "₹280",
        "description": "Paneer in a rich, creamy, and buttery tomato gravy.",
        "image": "https://picsum.photos/seed/PaneerButterMasala/800/600"
      },
      {
        "name": "Handi Paneer",
        "price": "₹230",
        "description": "Paneer cooked with bell peppers in a traditional handi.",
        "image": "https://picsum.photos/seed/HandiPaneer/800/600"
      },
      {
        "name": "Kadai Paneer",
        "price": "₹230",
        "description": "Spicy paneer cooked with bell peppers and whole spices.",
        "image": "https://picsum.photos/seed/KadaiPaneer/800/600"
      },
      {
        "name": "Paneer Bhurji",
        "price": "₹250",
        "description": "Scrambled cottage cheese cooked with onions and tomatoes.",
        "image": "https://picsum.photos/seed/PaneerBhurji/800/600"
      }
    ]
  },
  {
    "category": "Rice",
    "items": [
      {
        "name": "Steam Rice",
        "price": "₹100",
        "description": "Plain, fluffy steamed basmati rice.",
        "image": "https://picsum.photos/seed/SteamRice/800/600"
      },
      {
        "name": "Jeera Rice",
        "price": "₹120",
        "description": "Basmati rice tempered with cumin seeds.",
        "image": "https://picsum.photos/seed/JeeraRice/800/600"
      },
      {
        "name": "Butter Rice",
        "price": "₹110",
        "description": "Steamed rice tossed with rich butter.",
        "image": "https://picsum.photos/seed/ButterRice/800/600"
      },
      {
        "name": "Veg Fried Rice",
        "price": "₹140",
        "description": "Stir-fried rice with mixed vegetables and soy sauce.",
        "image": "https://picsum.photos/seed/VegFriedRice/800/600"
      },
      {
        "name": "Paneer Pulao",
        "price": "₹150",
        "description": "Fragrant rice cooked with spiced cottage cheese cubes.",
        "image": "https://picsum.photos/seed/PaneerPulao/800/600"
      },
      {
        "name": "Corn Butter Rice",
        "price": "₹150",
        "description": "Rice cooked with sweet corn and butter.",
        "image": "https://picsum.photos/seed/CornButterRice/800/600"
      },
      {
        "name": "Schezwan Fry Rice",
        "price": "₹150",
        "description": "Spicy stir-fried rice with Schezwan sauce.",
        "image": "https://picsum.photos/seed/SchezwanFryRice/800/600"
      },
      {
        "name": "Manchurian Fried Rice",
        "price": "₹150",
        "description": "Fried rice served with vegetable Manchurian.",
        "image": "https://picsum.photos/seed/ManchurianFriedRice/800/600"
      }
    ]
  },
  {
    "category": "Biryani",
    "items": [
      {
        "name": "Veg Biryani",
        "price": "₹180",
        "description": "Aromatic basmati rice cooked with mixed vegetables and spices.",
        "image": "https://picsum.photos/seed/VegBiryani/800/600"
      },
      {
        "name": "Veg Hydrabadi Biryani",
        "price": "₹220",
        "description": "Spicy and flavorful authentic Hyderabadi style biryani.",
        "image": "https://picsum.photos/seed/VegHydrabadiBiryani/800/600"
      },
      {
        "name": "Veg Dum Biryani",
        "price": "₹200",
        "description": "Slow-cooked aromatic rice and vegetable layered dish.",
        "image": "https://picsum.photos/seed/VegDumBiryani/800/600"
      }
    ]
  },
  {
    "category": "Indian Breads",
    "items": [
      {
        "name": "Tandoori Roti Plain",
        "price": "₹15",
        "description": "Whole wheat flatbread baked in a clay oven.",
        "image": "https://picsum.photos/seed/TandooriRotiPlain/800/600"
      },
      {
        "name": "Tandoori Roti Butter",
        "price": "₹20",
        "description": "Clay oven baked flatbread topped with butter.",
        "image": "https://picsum.photos/seed/TandooriRotiButter/800/600"
      },
      {
        "name": "Naan",
        "price": "₹60",
        "description": "Soft and fluffy leavened flatbread baked in a tandoor.",
        "image": "https://picsum.photos/seed/Naan/800/600"
      },
      {
        "name": "Butter Naan",
        "price": "₹70",
        "description": "Soft naan bread brushed with generous amounts of butter.",
        "image": "https://picsum.photos/seed/ButterNaan/800/600"
      },
      {
        "name": "Garlic Naan",
        "price": "₹80",
        "description": "Naan bread flavored with minced garlic and cilantro.",
        "image": "https://picsum.photos/seed/GarlicNaan/800/600"
      },
      {
        "name": "Lacha Parantha",
        "price": "₹100",
        "description": "Multi-layered flaky whole wheat flatbread.",
        "image": "https://picsum.photos/seed/LachaParantha/800/600"
      },
      {
        "name": "Tandoori Stuff Kulcha",
        "price": "₹120",
        "description": "Stuffed leavened bread baked in a clay oven.",
        "image": "https://picsum.photos/seed/TandooriStuffKulcha/800/600"
      },
      {
        "name": "Missi Roti",
        "price": "₹50",
        "description": "Spiced gram flour and wheat flatbread.",
        "image": "https://picsum.photos/seed/MissiRoti/800/600"
      },
      {
        "name": "Cheese Naan",
        "price": "₹100",
        "description": "Soft naan bread stuffed with melted cheese.",
        "image": "https://picsum.photos/seed/CheeseNaan/800/600"
      },
      {
        "name": "Tawa Chapati Plain",
        "price": "₹10",
        "description": "Simple whole wheat flatbread cooked on a griddle.",
        "image": "https://picsum.photos/seed/TawaChapatiPlain/800/600"
      },
      {
        "name": "Tawa Chapati Butter",
        "price": "₹15",
        "description": "Griddle-cooked flatbread brushed with butter.",
        "image": "https://picsum.photos/seed/TawaChapatiButter/800/600"
      },
      {
        "name": "Bajra Roti",
        "price": "₹30",
        "description": "Healthy and rustic pearl millet flatbread.",
        "image": "https://picsum.photos/seed/BajraRoti/800/600"
      },
      {
        "name": "Rumali Roti",
        "price": "₹50",
        "description": "Paper-thin, soft, and folded flatbread.",
        "image": "https://picsum.photos/seed/RumaliRoti/800/600"
      }
    ]
  },
  {
    "category": "Rajasthani Special",
    "items": [
      {
        "name": "Dal Bati Churma",
        "price": "₹350",
        "description": "Traditional Rajasthani meal of lentils, baked wheat balls, and sweet crumbled cereal.",
        "image": "https://picsum.photos/seed/DalBatiChurma/800/600"
      }
    ]
  }
];

const TiltImage = ({ src, alt }: { src: string, alt: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1200 }} className="w-full max-w-[320px]">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="rect-image w-full aspect-[4/3] relative cursor-pointer"
      >
        <div
          className="rect-image-inner"
          style={{ transform: "translateZ(40px)" }}
        >
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Subtle 3D shadow/glow behind the image */}
        <div 
          className="absolute inset-0 rounded-xl bg-[var(--color-accent)] opacity-0 blur-2xl transition-opacity duration-500 hover:opacity-20"
          style={{ transform: "translateZ(-20px)" }}
        />
      </motion.div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-texture overflow-hidden relative">
      
      {/* Floating Navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-4 items-center">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-[var(--color-accent)] opacity-30"></div>
        {menuData.map((section, idx) => (
          <a 
            key={idx} 
            href={`#${section.category.replace(/\s+/g, '-')}`}
            className="group relative flex items-center justify-center w-6 h-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-30 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
            <span className="absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-cinzel text-[var(--color-accent)] text-xs whitespace-nowrap tracking-widest">
              {section.category}
            </span>
          </a>
        ))}
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-[var(--color-accent)] opacity-30"></div>
      </div>

      <div className="content-wrapper max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        
        {/* Jharokha Top Border */}
        <div className="w-full relative z-20 -mb-[1px]">
          <JharokhaTop />
        </div>

        <div className="border-x-2 border-b-2 border-t-0 border-[var(--color-accent)]/40 rounded-b-3xl p-6 md:p-12 bg-[var(--color-bg-card)]/40 backdrop-blur-sm shadow-2xl relative z-10 pt-0">
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
                y: [0, -15, 0],
                rotateY: [-5, 5, -5]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              src="https://ik.imagekit.io/j1fgksdwx/Derawar%20(6).png" 
              alt="Derawar Logo" 
              referrerPolicy="no-referrer"
              className="w-72 md:w-96 lg:w-[32rem] mb-2 object-contain"
              style={{ 
                transformStyle: "preserve-3d",
                filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.3))"
              }}
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

        {/* Menu Sections */}
        <main className="space-y-20">
          {menuData.map((section, idx) => (
            <section key={idx} id={section.category.replace(/\s+/g, '-')} className="relative pt-8 scroll-mt-16">
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotateX: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center mb-12"
                style={{ perspective: 1000 }}
              >
                <Ornament />
                <div className="flex items-center justify-center mt-6">
                  <div className="w-12 md:w-24 h-px bg-gradient-to-r from-transparent to-[var(--color-accent)] opacity-50"></div>
                  <h2 className="mx-6 font-cinzel text-4xl md:text-6xl text-[var(--color-accent)] tracking-[0.2em] uppercase text-glow drop-shadow-lg text-center">
                    {section.category}
                  </h2>
                  <div className="w-12 md:w-24 h-px bg-gradient-to-l from-transparent to-[var(--color-accent)] opacity-50"></div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
                {section.items.map((item, itemIdx) => (
                  <motion.div 
                    key={itemIdx} 
                    initial={{ opacity: 0, y: 50, rotateY: 15 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: (itemIdx % 4) * 0.1 }}
                    className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 group relative p-2 -mx-2 rounded-2xl transition-all duration-500 hover:bg-[var(--color-accent)]/5 hover:shadow-[inset_0_0_30px_rgba(212,175,55,0.05)]"
                    style={{ perspective: 1000 }}
                  >
                    {item.image && (
                      <div className="shrink-0 relative z-10">
                        <TiltImage src={item.image} alt={item.name} />
                      </div>
                    )}
                    
                      <div className="flex flex-col justify-center flex-grow w-full relative z-10">
                        <div className="flex items-center justify-between w-full mb-1">
                          <motion.h3 
                            whileHover={{ scale: 1.02, color: "var(--color-accent)", originX: 0 }}
                            className="font-cormorant text-2xl md:text-3xl font-medium text-[var(--color-text-main)] transition-colors cursor-default flex items-center gap-3"
                          >
                            <span className="text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">✦</span>
                            {item.name}
                          </motion.h3>
                          
                          <span className="font-cinzel text-xl text-[var(--color-accent)] tracking-widest whitespace-nowrap ml-4">
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
