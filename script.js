const countDisplay = document.querySelector('.count-display');
const progressBarFill = document.querySelector('.progress-fill');
const loadingPage = document.querySelector('.loading-page');
const welcomePage = document.querySelector('.welcome-page');
const splash = document.createElement('div');
const steering_image = document.querySelector('.steering-image');

splash.className = 'splash';
document.body.appendChild(splash);

let count = 0;
const duration = 3000;
const intervalTime = 40;
const totalSteps = duration / intervalTime;

const countingInterval = setInterval(() => {
    count += 1;
    const progressPercentage = (count / totalSteps) * 100;
    countDisplay.innerHTML = `${Math.round(progressPercentage)}<span class="percentage-sign">%</span>`;
    progressBarFill.style.width = `${progressPercentage}%`;

    if (progressPercentage >= 100) {
        clearInterval(countingInterval);
        gsap.to(splash, {
            opacity: 1,
            duration: 0.5,
            onComplete: () => {
                gsap.to(loadingPage, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        loadingPage.style.display = 'none';
                        welcomePage.style.display = 'flex';
                        gsap.fromTo(
                            welcomePage,
                            { opacity: 0 },
                            {
                                opacity: 1,
                                duration: 0.8,
                                ease: "power2.out",
                                onComplete: () => {
                                    setTimeout(() => {
                                        var tl = gsap.timeline({
                                            scrollTrigger: {
                                                trigger: "#main",
                                                markers: true,
                                                start: "50% 50%",
                                                end: "100% 50%",
                                                scrub: 2,
                                                pin: true
                                            }
                                        });

                                        tl
                                            .to("#top", {
                                                top: "-100%",
                                                duration: 2.5,
                                                ease: "power2.out",
                                                delay: 1,
                                                scale: 1.1,
                                                opacity: 0,
                                            }, 'a')
                                            .to("#bottom", {
                                                bottom: "-100%",
                                                duration: 2.5,
                                                ease: "power2.out",
                                                delay: 1,
                                                scale: 1.1,
                                                opacity: 0,
                                            }, 'a')
                                            .from("#content", {
                                                opacity: 0,
                                                scale: 0.8,
                                                duration: 1,
                                                ease: "back.out(1.7)",
                                                stagger: 0.2
                                            });
                                    }, 100);
                                }
                            }
                        );
                    }
                });
            }
        });
    }
}, intervalTime);

let degree = 0;

steering_image.addEventListener("mousemove", mousemovehandler);

function mousemovehandler(e) {
    const rect = steering_image.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const deltaX = e.clientX - centerX;
    degree = deltaX / 1.9;
    if (degree > 105) degree = 105;
    if (degree < -105) degree = -105;
    steering_image.style.transition = 'transform 0.2s ease-out';
    steering_image.style.transform = `translate(-50%, -50%) rotate(${degree}deg)`;
}

const video = document.getElementById('backgroundVideo');
function playRelatedVideo(box) {
    const videoSrc = box.getAttribute('data-video');
    if (video.src !== videoSrc) {
        video.src = videoSrc;
        video.load();
        video.play();
    }
}

const carData = [
    {
        name: "Suzuki Alto",
        price: "PKR 23.3 - 30.5 lacs",
        rating: 4,
        numReviews: 203,
        imageUrl: "https://th.bing.com/th/id/R.7a3974bd3b5c700bfc2adda0e7cf7190?rik=qyPP3UvUOkTYLw&riu=http%3a%2f%2fsuzukisouth.com.pk%2fwp-content%2fuploads%2f2019%2f05%2fcolwhite-1.png&ehk=MUNaA9ZdTWZcJxwnrzM%2beFyM%2b9NNi0AXSWpyZQDi2P4%3d&risl=&pid=ImgRaw&r=0",
        "engineAndPerformance": "20-22 km/l",
        "fuelType": "Petrol",
        "transmission": "Manual / Automatic",
        "transmissionDetails": "The **Suzuki Alto** comes with **manual** and **automatic transmission** options, offering flexibility for different driving preferences.",
        "exterior": "The car features a compact and sleek design with **sharp headlights**, **modern front grille**, and **chrome accents** for a stylish look.",
        "interior": "**Spacious** interior with comfortable **seating**, a user-friendly dashboard, and **modern infotainment** features for enhanced convenience.",
        "audio": "Equipped with a **premium audio system**, providing clear sound quality for an enjoyable driving experience.",
        "infotainment": "Includes a **touchscreen display** with **Bluetooth** connectivity, **USB ports**, and **Apple CarPlay** for seamless integration.",
        "safety": "Features include **ABS brakes**, **airbags**, **rear parking sensors**, and **ESP** for a safer driving experience."
    },
    {
        name: "Honda City",
        price: "PKR 46.5 - 58.5 lacs",
        rating: 2,
        numReviews: 457,
        imageUrl: "https://www.pngplay.com/wp-content/uploads/13/Honda-City-PNG-Pic-Background.png",
        "engineAndPerformance": "15-18 km/l",
        "fuelType": "Petrol",
        "transmission": "Manual / Automatic",
        "transmissionDetails": "Available in both **manual** and **automatic transmission** variants for optimal control.",
        "exterior": "Modern **aerodynamic design**, sharp lines, and **LED headlights** offer a sleek and bold appearance.",
        "interior": "Offers a **spacious** and **comfortable cabin** with **premium upholstery** and a **well-organized dashboard** for ease of use.",
        "audio": "Includes an **advanced sound system** with **Bluetooth**, USB, and **Auxiliary input** for high-quality entertainment.",
        "infotainment": "**Touchscreen infotainment** system with **Apple CarPlay**, **Android Auto**, and **Bluetooth connectivity** for seamless user interaction.",
        "safety": "Comes equipped with **ABS**, **EBD**, **dual airbags**, and **reverse camera** for enhanced security and driver assistance."
    },
    {
        "name": "BMW X5",
        "price": "PKR 175.0 - 200.0 lacs",
        "rating": 4.9,
        "numReviews": 130,
        "imageUrl": "https://th.bing.com/th/id/R.0f7c874f02ddea2d11f2972332a23345?rik=EJWkavINeiydkA&pid=ImgRaw&r=0",
        "engineAndPerformance": "10-12 km/l",
        "fuelType": "Diesel / Petrol",
        "transmission": "Automatic / Manual",
        "transmissionDetails": "The **BMW X5** offers an **automatic transmission** for smooth shifting and enhanced driving experience.",
        "exterior": "**Bold design** with aggressive lines, **LED headlights**, and **sporty grille** gives it a powerful presence.",
        "interior": "Premium interior with **luxurious leather seats**, **state-of-the-art technology**, and **spacious cabin** for comfort.",
        "audio": "Features a **high-end sound system**, with **surround sound** and **Bluetooth connectivity** for superior audio quality.",
        "infotainment": "**iDrive** system with a **large display**, **Apple CarPlay**, and **Android Auto** for advanced connectivity.",
        "safety": "Equipped with **lane departure warning**, **automatic emergency braking**, **traction control**, and **multiple airbags** for utmost safety."
    },
    {
        "name": "Audi Q7",
        "price": "PKR 165.0 - 190.0 lacs",
        "rating": 4.6,
        "numReviews": 170,
        "imageUrl": "https://www.pngplay.com/wp-content/uploads/13/Audi-Q7-Transparent-Background.png",
        "engineAndPerformance": "8-10 km/l",
        "fuelType": "Diesel / Petrol",
        "transmission": "Automatic",
        "transmissionDetails": "**Automatic transmission** enhances the driving experience with its smooth shifts and responsive performance.",
        "exterior": "A **luxurious SUV** with **LED Matrix headlights**, **sporty design**, and **elegant lines** for an impressive presence.",
        "interior": "Features **premium leather seats**, **spacious cabin**, and **elegant design** with advanced **tech** for comfort and convenience.",
        "audio": "Equipped with a **Bose sound system**, providing **superior sound quality** for an exceptional listening experience.",
        "infotainment": "Offers a **dual touchscreen infotainment system**, **Apple CarPlay**, and **Android Auto** for easy connectivity.",
        "safety": "Includes **adaptive cruise control**, **lane assist**, **parking sensors**, and **front and rear airbags** for comprehensive safety."
    },
    {
        "name": "Mercedes Benz C-Class",
        "price": "PKR 120.0 - 150.0 lacs",
        "rating": 4.8,
        "numReviews": 210,
        "imageUrl": "https://th.bing.com/th/id/R.e97f40d6e82eabb1b17bf9185ee671a3?rik=ak9jjOjUSXe0%2bA&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-grey-mercedes-benz-e-class-carcarvehicletransportmercedes-benz-961524651209n6nul.png&ehk=21iEtJMNFwC9LHs8x8Ugsu07%2fkT6kmTtoAhz6legg9k%3d&risl=&pid=ImgRaw&r=0",
        "engineAndPerformance": "12-15 km/l",
        "fuelType": "Petrol / Diesel",
        "transmission": "Automatic",
        "transmissionDetails": "The **Mercedes Benz C-Class** is equipped with a **7-speed automatic transmission**, offering seamless gear shifts and a smooth driving experience.",
        "exterior": "The C-Class boasts a **sleek and sophisticated** design with sharp, **angular lines**, a **signature grille**, and **LED headlamps** that give it an imposing look.",
        "interior": "Inside, the C-Class features **luxury seating** with **premium leather upholstery**, a high-tech **infotainment system**, and an elegant dashboard that combines style and function.",
        "audio": "Comes with a **Burmester sound system** that delivers **crystal-clear sound**, enhancing your driving experience with top-tier audio quality.",
        "infotainment": "**MBUX** system, a **12.3-inch touchscreen**, **Apple CarPlay**, and **Android Auto** provide seamless integration for all your connectivity needs.",
        "safety": "Equipped with **active brake assist**, **lane-keeping assist**, **blind-spot monitoring**, and **multiple airbags** to ensure a safe ride."
    },
    {
        "name": "Land Rover Range Rover",
        "price": "PKR 240.0 - 300.0 lacs",
        "rating": 5.0,
        "numReviews": 90,
        "imageUrl": "https://th.bing.com/th/id/R.1062297156cc8c8e6a0a4de35ea000a0?rik=axWtn%2bYaytyTQA&pid=ImgRaw&r=0",
        "engineAndPerformance": "10-12 km/l",
        "fuelType": "Diesel / Petrol",
        "transmission": "Automatic",
        "transmissionDetails": "The **Range Rover** is powered by a **smooth 8-speed automatic transmission**, offering powerful performance off-road and on highways.",
        "exterior": "The **Range Rover** offers a **distinctive, robust design** with **slim LED headlights**, an aggressive **front grille**, and a commanding presence on the road.",
        "interior": "Spacious and luxurious, the interior of the **Range Rover** is designed for ultimate comfort with **fine leather** and **premium wood finishes**, providing a first-class driving experience.",
        "audio": "It features a **Meridian surround sound system** that offers **high-fidelity audio** for the best listening experience.",
        "infotainment": "The **Touch Pro Duo** infotainment system features a **dual touchscreen** interface, **Apple CarPlay**, and **Android Auto** to keep you connected.",
        "safety": "Packed with advanced safety features like **adaptive cruise control**, **lane departure warning**, **traffic sign recognition**, and **emergency braking assist**."
    },
    {
        "name": "Jeep Grand Cherokee",
        "price": "PKR 180.0 - 220.0 lacs",
        "rating": 4.6,
        "numReviews": 110,
        "imageUrl": "https://th.bing.com/th/id/R.5bda2bdbe28f7f3a7dffe2634893c8f5?rik=KDC35gWc08x5wQ&pid=ImgRaw&r=0",
        "engineAndPerformance": "8-11 km/l",
        "fuelType": "Petrol / Diesel",
        "transmission": "Automatic",
        "transmissionDetails": "The **Jeep Grand Cherokee** features a **smooth automatic transmission** that enhances the SUV's rugged performance both on and off the road.",
        "exterior": "With its **bold front fascia**, **signature seven-slot grille**, and aggressive stance, the **Grand Cherokee** is built for adventure.",
        "interior": "The interior offers **premium seating** with **leather upholstery**, a high-tech **infotainment system**, and ample cargo space for all your travels.",
        "audio": "Comes with a **Harman Kardon audio system** that provides an **immersive sound experience** with crystal-clear highs and deep bass.",
        "infotainment": "Equipped with an **8.4-inch Uconnect touchscreen**, **Apple CarPlay**, **Android Auto**, and **Bluetooth** for convenient connectivity.",
        "safety": "Safety features include **blind spot monitoring**, **rear cross-traffic alert**, **adaptive cruise control**, and **a robust suite of airbags** for all-around protection."
    },
    {
        "name": "Rolls-Royce Phantom",
        "price": "PKR 550.0 - 600.0 lacs",
        "rating": 5.0,
        "numReviews": 50,
        "imageUrl": "https://purepng.com/public/uploads/large/purepng.com-rolls-royce-phantom-limelight-carcarvehicletransportrolls-royce-961524655086whyyc.png",
        "engineAndPerformance": "5-8 km/l",
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "transmissionDetails": "The **Rolls-Royce Phantom** features an **advanced automatic transmission** that ensures effortless gear shifts and a smooth, silent drive.",
        "exterior": "With its **luxurious and stately design**, the Phantom boasts **elegant curves**, **iconic front grille**, and **signature Spirit of Ecstasy** emblem.",
        "interior": "Inside, the **Phantom** offers a **customizable** interior with **plush leather seating**, **handcrafted finishes**, and a **state-of-the-art entertainment system**.",
        "audio": "Equipped with a **bespoke audio system** that delivers a truly **exceptional sound quality** fitting its luxury status.",
        "infotainment": "The **Rolls-Royce Bespoke Audio** system and **advanced infotainment** features ensure that every drive is as smooth and entertaining as possible.",
        "safety": "Equipped with top-of-the-line safety features including **night vision**, **collision warning**, **lane-keeping assist**, and an extensive array of airbags for safety."
    },
    {
        "name": "Ford Mustang",
        "price": "PKR 80.0 - 100.0 lacs",
        "rating": 4.7,
        "numReviews": 160,
        "imageUrl": "https://th.bing.com/th/id/R.2f469ce1ef1e7a345c4a26ad0e00657c?rik=yyifEJczwClW5g&pid=ImgRaw&r=0",
        "engineAndPerformance": "8-10 km/l",
        "fuelType": "Petrol",
        "transmission": "Manual / Automatic",
        "transmissionDetails": "The **Ford Mustang** features a **6-speed manual transmission** (or available **10-speed automatic**) for a thrilling driving experience.",
        "exterior": "With its iconic **muscle car design**, the Mustang boasts a **bold front grille**, **sharp headlights**, and a **powerful stance** that commands attention.",
        "interior": "The interior is designed with **leather upholstery**, a **driver-focused cockpit**, and a **modern infotainment system** that combines style with functionality.",
        "audio": "Equipped with a **Bang & Olufsen audio system** for crystal-clear sound quality, enhancing your driving experience.",
        "infotainment": "The **SYNC 3** system features an **8-inch touchscreen**, **Apple CarPlay**, **Android Auto**, and available **navigation** for an intuitive interface.",
        "safety": "Safety features include **adaptive cruise control**, **rear parking sensors**, **lane-keeping assist**, and **pre-collision assist** for added protection."
    },
    {
        "name": "Tesla Model 3",
        "price": "PKR 115.0 - 140.0 lacs",
        "rating": 4.9,
        "numReviews": 220,
        "imageUrl": "https://www.pngplay.com/wp-content/uploads/13/Tesla-Model-3-PNG-Background.png",
        "engineAndPerformance": "15-20 km/l",
        "fuelType": "Electric",
        "transmission": "Automatic",
        "transmissionDetails": "The **Tesla Model 3** offers a **single-speed automatic transmission**, delivering a seamless, instant acceleration experience.",
        "exterior": "The **Tesla Model 3** has a sleek, **minimalistic design** with **streamlined curves**, a **closed front grille**, and **modern LED lighting**.",
        "interior": "The **interior** features **premium seating**, a **minimalistic dashboard**, and a **15-inch touchscreen** for an intuitive user experience.",
        "audio": "The **Tesla audio system** provides **superior sound quality** with 14 speakers for a premium in-car entertainment experience.",
        "infotainment": "A cutting-edge **touchscreen** system integrates navigation, **Spotify**, and **voice control**, offering an **extensive media library**.",
        "safety": "Tesla’s advanced safety features include **Autopilot**, **collision avoidance**, **lane departure warnings**, and **emergency braking**."
    },
    {
        "name": "Lexus RX",
        "price": "PKR 150.0 - 180.0 lacs",
        "rating": 4.5,
        "numReviews": 120,
        "imageUrl": "https://th.bing.com/th/id/R.f42433939d846676d19e1ae9c7cb03e2?rik=d6xQwkqtWmmn7w&pid=ImgRaw&r=0",
        "engineAndPerformance": "12-14 km/l",
        "fuelType": "Petrol / Hybrid",
        "transmission": "Automatic",
        "transmissionDetails": "The **Lexus RX** is equipped with an **8-speed automatic transmission** offering smooth performance and fuel efficiency.",
        "exterior": "The **Lexus RX** features a **bold spindle grille**, **sleek LED headlights**, and a **dynamic body** that reflects its luxurious and aggressive appeal.",
        "interior": "The interior combines **fine leather upholstery**, a **12.3-inch infotainment screen**, and a **luxury feel** with impeccable attention to detail.",
        "audio": "Equipped with a **Mark Levinson audio system**, providing a **premium sound experience** with precision-engineered speakers.",
        "infotainment": "The **Enform system** integrates **Apple CarPlay**, **Android Auto**, and a **13-speaker sound system** to keep you connected on the go.",
        "safety": "Safety features include **adaptive cruise control**, **lane-keeping assist**, **blind-spot monitoring**, and **pre-collision system**."
    },
    {
        "name": "Porsche Cayenne",
        "price": "PKR 220.0 - 260.0 lacs",
        "rating": 4.9,
        "numReviews": 95,
        "imageUrl": "https://th.bing.com/th/id/R.c67b13e10659984db9a64565b38b4a45?rik=oG4ZFTo0yLuqtA&pid=ImgRaw&r=0",
        "engineAndPerformance": "8-12 km/l",
        "fuelType": "Petrol / Hybrid",
        "transmission": "Automatic",
        "transmissionDetails": "The **Porsche Cayenne** comes with an **8-speed Tiptronic S automatic transmission**, ensuring dynamic acceleration and sporty handling.",
        "exterior": "The **Porsche Cayenne** has an athletic stance, with **wide arches**, a distinctive **Porsche front end**, and aggressive **LED light strips**.",
        "interior": "The interior offers **luxurious leather** seats, a **14-inch touchscreen** with **Porsche Communication Management**, and advanced **driver assistance** features.",
        "audio": "Equipped with the **Bose surround sound system**, it delivers **immaculate sound clarity** for an immersive listening experience.",
        "infotainment": "Features include a **12.3-inch touchscreen**, **Apple CarPlay**, **Android Auto**, and advanced **navigation** with **real-time traffic updates**.",
        "safety": "Porsche safety systems include **adaptive cruise control**, **lane departure warning**, **night vision assist**, and **automated emergency braking**."
    },
    {
        "name": "Chevrolet Bolt",
        "price": "PKR 40.0 - 45.0 lacs",
        "rating": 4.5,
        "numReviews": 200,
        "imageUrl": "https://th.bing.com/th/id/R.b2851a186de0b59ae1889ac5805ab723?rik=FoENmJJ222KBvQ&pid=ImgRaw&r=0",
        "engineAndPerformance": "15-17 km/l",
        "fuelType": "Electric",
        "transmission": "Automatic",
        "transmissionDetails": "The **Chevrolet Bolt** is powered by an **automatic transmission**, ensuring efficient use of its electric motor to deliver responsive performance.",
        "exterior": "With a **compact hatchback design**, the **Chevrolet Bolt** features a modern and aerodynamic exterior that maximizes efficiency while being stylish.",
        "interior": "Inside, the **Bolt** offers a **spacious cabin**, **comfortable seating**, and a **user-friendly 10.2-inch touchscreen** to manage all tech features.",
        "audio": "The **Bolt** comes with a **premium sound system** that provides impressive clarity, delivering high-quality audio for every ride.",
        "infotainment": "The **MyLink system** integrates **Apple CarPlay**, **Android Auto**, and **Bluetooth** connectivity for all your tech needs.",
        "safety": "Includes **forward collision alert**, **lane departure warning**, **rear vision camera**, and **automatic emergency braking** to keep you safe."
    },
    {
        "name": "Chevrolet Camaro",
        "price": "PKR 70.0 - 75.0 lacs",
        "rating": 4.3,
        "numReviews": 160,
        "imageUrl": "https://th.bing.com/th/id/R.c4f6302554263af1b960c71d2ab4d57e?rik=83hckHoxfRxkRg&pid=ImgRaw&r=0",
        "engineAndPerformance": "6-8 km/l",
        "fuelType": "Petrol",
        "transmission": "Manual / Automatic",
        "transmissionDetails": "The **Chevrolet Camaro** offers a choice of **6-speed manual** or **8-speed automatic transmission**, with precision-shifting and a focus on performance.",
        "exterior": "The **Chevrolet Camaro** is built for performance with its **aggressive front bumper**, **sleek bodylines**, and **muscular stance**.",
        "interior": "Inside, the **Camaro** features **sporty bucket seats**, **advanced driver display**, and a **high-tech infotainment system**.",
        "audio": "The **Chevrolet Camaro** offers a **Bose sound system**, providing immersive audio quality, ensuring each drive is accompanied by crisp, dynamic sound.",
        "infotainment": "The **Chevrolet MyLink system** offers **Apple CarPlay**, **Android Auto**, and **navigation**, while a **7-inch touchscreen** makes controls simple.",
        "safety": "Safety features include **rear vision camera**, **traction control**, **blind-spot monitoring**, and **forward collision alert**."
    },
    {
        "name": "Ram 1500",
        "price": "PKR 80.0 - 95.0 lacs",
        "rating": 4.2,
        "numReviews": 250,
        "imageUrl": "https://www.pngplay.com/wp-content/uploads/7/Black-Dodge-Ram-PNG-Clipart-Background.png",
        "engineAndPerformance": "8-10 km/l",
        "fuelType": "Petrol / Diesel",
        "transmission": "Automatic",
        "transmissionDetails": "The **Ram 1500** is equipped with an **8-speed automatic transmission**, ensuring smooth shifts for the heavy-duty tasks.",
        "exterior": "With its **bold and muscular design**, the **Ram 1500** features a **large front grille**, **rugged wheel arches**, and high clearance for off-road adventures.",
        "interior": "The **Ram 1500** offers a spacious interior with **premium leather seats**, a **12-inch touchscreen**, and a **driver-oriented cockpit** for enhanced comfort.",
        "audio": "The **Harman Kardon audio system** provides **rich, deep sound** for a superior music experience, even in tough terrain.",
        "infotainment": "A large **12-inch Uconnect touchscreen** system offers **Apple CarPlay**, **Android Auto**, and **navigation**, keeping you connected during every drive.",
        "safety": "Includes features like **blind-spot monitoring**, **rear cross-path detection**, **adaptive cruise control**, and **forward collision warning**."
    },
    {
        "name": "Toyota RAV4",
        "price": "PKR 45.0 - 55.0 lacs",
        "rating": 4.4,
        "numReviews": 180,
        "imageUrl": "https://th.bing.com/th/id/R.de07352e7e34fd211788a2ae8a710a98?rik=DTFwxwl6h4yCUw&pid=ImgRaw&r=0",
        "engineAndPerformance": "12-14 km/l",
        "fuelType": "Petrol / Hybrid",
        "transmission": "Automatic",
        "transmissionDetails": "The **Toyota RAV4** comes with a **CVT transmission** for smooth and efficient power delivery in both city and highway driving.",
        "exterior": "The **Toyota RAV4** boasts a bold, **rugged design** with sharp **LED headlights**, a **slotted grille**, and sculpted body lines for a more athletic stance.",
        "interior": "Inside, the **RAV4** offers **spacious seating**, **premium finishes**, and a **7-inch touchscreen** for easy access to infotainment and navigation.",
        "audio": "The **premium JBL audio system** offers **crisp and clear sound**, delivering an enjoyable audio experience throughout your journey.",
        "infotainment": "The **Toyota Entune system** features a **7-inch touchscreen**, **Apple CarPlay**, **Android Auto**, and **navigation**.",
        "safety": "Advanced safety features include **Toyota Safety Sense**, **lane departure alert**, **adaptive cruise control**, and **pre-collision system**."
    },
    {
        "name": "BMW 7 Series",
        "price": "PKR 150.0 - 170.0 lacs",
        "rating": 4.9,
        "numReviews": 120,
        "imageUrl": "https://www.pngplay.com/wp-content/uploads/13/BMW-7-Series-Transparent-PNG.png",
        "engineAndPerformance": "10-12 km/l",
        "fuelType": "Petrol / Diesel",
        "transmission": "Automatic",
        "transmissionDetails": "The **BMW 7 Series** offers a **8-speed automatic transmission** with **smooth shifts** and **dynamic driving modes** for performance-focused driving.",
        "exterior": "The **BMW 7 Series** features a **sophisticated design**, with a **distinctive kidney grille**, sleek **LED headlamps**, and a streamlined **aerodynamic body**.",
        "interior": "The interior is refined with **luxury leather seats**, **premium wood trims**, and a **12.3-inch digital display** for a **next-level driving experience**.",
        "audio": "Equipped with a **Bowers & Wilkins surround sound system**, delivering **crystal-clear audio** with perfect acoustics for all passengers.",
        "infotainment": "A **10.25-inch touchscreen** system integrates **BMW’s iDrive**, **Apple CarPlay**, **Android Auto**, and **gesture controls** for hands-free operation.",
        "safety": "Safety features include **lane-keeping assist**, **adaptive cruise control**, **blind-spot monitoring**, and **automatic emergency braking**."
    },
    {
        "name": "Ford Mustang Mach-E",
        "price": "PKR 70.0 - 85.0 lacs",
        "rating": 4.6,
        "numReviews": 210,
        "imageUrl": "https://th.bing.com/th/id/R.87a7c2bc4881783d1d4442473049157b?rik=B7f%2fKmxb8bHj3g&pid=ImgRaw&r=0",
        "engineAndPerformance": "12-15 km/l",
        "fuelType": "Electric",
        "transmission": "Automatic",
        "transmissionDetails": "The **Mustang Mach-E** offers a **single-speed automatic transmission**, providing a smooth, responsive drive with instant torque.",
        "exterior": "The **Mustang Mach-E** presents a futuristic and **sleek design**, blending **Mustang performance DNA** with a stylish electric SUV shape.",
        "interior": "Inside, the **Mach-E** offers **spacious seating**, a **15.5-inch touchscreen**, and a premium **Bang & Olufsen sound system**.",
        "audio": "The **Bang & Olufsen audio system** provides **crystal-clear sound**, offering an immersive listening experience while driving.",
        "infotainment": "With **Ford’s SYNC 4A system**, you get **Apple CarPlay**, **Android Auto**, and **wireless updates** for seamless technology.",
        "safety": "Advanced safety features include **adaptive cruise control**, **lane-keeping assist**, **blind-spot monitoring**, and **pre-collision assist**."
    },
    {
        "name": "Toyota Prius",
        "price": "PKR 35.0 - 40.0 lacs",
        "rating": 4.1,
        "numReviews": 190,
        "imageUrl": "https://th.bing.com/th/id/R.7b7f8bec26d6e9f1960dedd2bb8683d2?rik=52AwhiKm2ai5yQ&pid=ImgRaw&r=0",
        "engineAndPerformance": "18-22 km/l",
        "fuelType": "Hybrid",
        "transmission": "Automatic",
        "transmissionDetails": "The **Toyota Prius** uses a **CVT transmission**, providing smooth shifts and excellent fuel efficiency for everyday commuting.",
        "exterior": "The **Toyota Prius** has a **sleek, aerodynamic design** with sharp lines, a **low profile**, and an emphasis on fuel efficiency.",
        "interior": "Inside, the **Prius** offers a **spacious** and **comfortable cabin**, with **premium materials** and a **central touchscreen** for all controls.",
        "audio": "The **Toyota Prius** comes equipped with a **premium JBL audio system**, providing clear and dynamic sound during your drive.",
        "infotainment": "The **Toyota Entune system** integrates **Apple CarPlay**, **Android Auto**, and **Bluetooth connectivity** for seamless interaction.",
        "safety": "Safety features include **Toyota Safety Sense**, **lane departure warning**, **pre-collision system**, and **adaptive cruise control**."
    },
    {
        "name": "Audi A4",
        "price": "PKR 60.0 - 70.0 lacs",
        "rating": 4.5,
        "numReviews": 220,
        "imageUrl": "https://www.pngplay.com/wp-content/uploads/13/Audi-A4-2019-PNG-Photo-Image.png",
        "engineAndPerformance": "12-14 km/l",
        "fuelType": "Petrol / Diesel",
        "transmission": "Automatic",
        "transmissionDetails": "The **Audi A4** comes with an **S-Tronic automatic transmission**, providing precise and fast gear shifts for smooth acceleration.",
        "exterior": "The **Audi A4** showcases a sophisticated design with a **bold front grille**, **sleek lines**, and an overall sporty yet elegant appearance.",
        "interior": "Inside, the **Audi A4** features a **luxurious cabin** with **fine leather upholstery**, **ambient lighting**, and a **10.1-inch MMI touchscreen**.",
        "audio": "The **Bose surround sound system** offers **premium audio quality**, delivering **rich bass** and **crystal-clear vocals** during your journey.",
        "infotainment": "The **MMI touch system** features **Apple CarPlay**, **Android Auto**, and **navigation**, and offers easy touch-based control for all features.",
        "safety": "Advanced safety features include **adaptive cruise control**, **lane assist**, **parking sensors**, and **pre-sense collision warning**."
    },
    {
        "name": "Ford F-250 Super Duty",
        "price": "PKR 120.0 - 140.0 lacs",
        "rating": 4.8,
        "numReviews": 140,
        "imageUrl": "https://th.bing.com/th/id/R.6b0919580e0c1981bb1ba1ce7a7393ee?rik=Cb1niuVgh%2bDraQ&pid=ImgRaw&r=0",
        "engineAndPerformance": "10-12 km/l",
        "fuelType": "Petrol / Diesel",
        "transmission": "Automatic",
        "transmissionDetails": "The **Ford F-250 Super Duty** comes with a **6-speed automatic transmission**, offering the power and responsiveness needed for heavy-duty tasks.",
        "exterior": "The **F-250 Super Duty** is designed to handle the toughest tasks, featuring a **bold front end**, large **chrome grille**, and **tough body structure**.",
        "interior": "Inside, the **F-250** offers a spacious, rugged interior with **high-quality materials**, **advanced technology**, and **seating for up to six passengers**.",
        "audio": "The **B&O audio system** delivers a **premium sound experience**, ensuring your favorite music sounds clear and dynamic even during off-road adventures.",
        "infotainment": "The **SYNC 4 system** comes with a **12-inch touchscreen**, **Apple CarPlay**, **Android Auto**, and **voice recognition** for hands-free control.",
        "safety": "Safety features include **pre-collision assist**, **blind-spot monitoring**, **adaptive cruise control**, and **trailer sway control**."
    },    
    {
        "name": "Mercedes-Benz Metris",
        "price": "PKR 70.0 - 80.0 lacs",
        "rating": 4.2,
        "numReviews": 100,
        "imageUrl": "https://th.bing.com/th/id/R.3110235eef20d1d1ef0201b943588fe4?rik=eGbAW14kBMeG0Q&riu=http%3a%2f%2fst.motortrend.com%2fuploads%2fsites%2f10%2f2016%2f06%2f2016-mercedes-benz-metris-base-passenger-van-angular-front.png&ehk=W%2bTPzCNX8Nek5clk8rhOIO3%2bYAPUrbam77XkFiRiRXc%3d&risl=&pid=ImgRaw&r=0",
        "engineAndPerformance": "10-12 km/l",
        "fuelType": "Petrol / Diesel",
        "transmission": "Automatic",
        "transmissionDetails": "The **Mercedes-Benz Metris** uses a **7-speed automatic transmission**, ensuring a smooth and powerful driving experience.",
        "exterior": "The **Metris** has a **sleek, professional design**, with a focus on space and versatility, perfect for commercial and personal use.",
        "interior": "Inside, the **Metris** is all about functionality, offering a spacious cabin with **advanced technology** and **cargo capacity**.",
        "audio": "The **Mercedes-Benz Metris** comes with an **integrated sound system**, providing clear audio for work or relaxation.",
        "infotainment": "The **Metris** includes **Mercedes-Benz COMAND system**, offering **Bluetooth**, **Apple CarPlay**, and **Android Auto** for connectivity.",
        "safety": "The **Metris** is equipped with **rearview camera**, **collision prevention assist**, and **lane-keeping assist** for added safety."
    },
    {
        "name": "Porsche 911",
        "price": "PKR 300.0 - 350.0 lacs",
        "rating": 4.9,
        "numReviews": 180,
        "imageUrl": "https://th.bing.com/th/id/R.e5636a13f77991388b2c76e994307af8?rik=s0XA2BXEaNDNgQ&pid=ImgRaw&r=0",
        "engineAndPerformance": "8-10 km/l",
        "fuelType": "Petrol",
        "transmission": "Automatic / Manual",
        "transmissionDetails": "The **Porsche 911** offers a **7-speed manual** or **8-speed PDK automatic** transmission for exceptional control and speed.",
        "exterior": "The **Porsche 911** features a **classic yet aggressive design**, with **wide rear haunches** and a sleek, aerodynamic body.",
        "interior": "Inside, the **Porsche 911** delivers a **luxurious cabin** with **premium leather upholstery**, a **driver-focused cockpit**, and **advanced tech features**.",
        "audio": "The **Porsche 911** offers a **Bose sound system**, delivering rich sound quality for an enhanced driving experience.",
        "infotainment": "The **Porsche Communication Management system** features a **10.9-inch touchscreen**, **Apple CarPlay**, **Android Auto**, and **navigation**.",
        "safety": "Advanced safety features in the **Porsche 911** include **lane-keeping assist**, **adaptive cruise control**, and **pre-collision assist**."
    },
    {
        "name": "Hyundai Ioniq",
        "price": "PKR 50.0 - 60.0 lacs",
        "rating": 4.3,
        "numReviews": 150,
        "imageUrl": "https://www.pngplay.com/wp-content/uploads/13/Hyundai-Ioniq-PNG-Photo-Image.png",
        "engineAndPerformance": "15-20 km/l",
        "fuelType": "Hybrid / Electric",
        "transmission": "Automatic",
        "transmissionDetails": "The **Hyundai Ioniq** uses a **single-speed automatic transmission** for smooth acceleration and an eco-friendly driving experience.",
        "exterior": "The **Hyundai Ioniq** offers a **sleek, aerodynamic design**, with sharp lines and a focus on fuel efficiency and modern styling.",
        "interior": "Inside, the **Ioniq** offers a **spacious and minimalist cabin**, with **advanced features** and **eco-friendly materials**.",
        "audio": "The **Hyundai Ioniq** comes with an **audio system** providing crystal-clear sound and great listening quality.",
        "infotainment": "The **Ioniq** features an **8-inch touchscreen**, **Apple CarPlay**, **Android Auto**, and **Bluetooth connectivity** for seamless integration.",
        "safety": "Safety features include **lane-keeping assist**, **rearview camera**, **blind-spot monitoring**, and **adaptive cruise control**."
    },
    {
        "name": "Jeep Grand Cherokee",
        "price": "PKR 90.0 - 100.0 lacs",
        "rating": 4.5,
        "numReviews": 230,
        "imageUrl": "https://th.bing.com/th/id/R.b063cb290a700ced0dcc3e5a61b26189?rik=XAuh0isyBcJupg&pid=ImgRaw&r=0",
        "engineAndPerformance": "8-10 km/l",
        "fuelType": "Petrol / Diesel",
        "transmission": "Automatic",
        "transmissionDetails": "The **Jeep Grand Cherokee** uses an **8-speed automatic transmission**, offering excellent off-road capability and smooth driving.",
        "exterior": "The **Grand Cherokee** is built for adventure, with a **rugged** and **stylish design** that includes high ground clearance and **muscular wheel arches**.",
        "interior": "Inside, the **Grand Cherokee** offers a **luxurious cabin**, with **leather seating**, **high-tech displays**, and **ample cargo space**.",
        "audio": "The **Grand Cherokee** features a **Harman Kardon sound system**, delivering **high-fidelity sound** throughout the cabin.",
        "infotainment": "The **Uconnect 5 system** includes a **10.1-inch touchscreen**, **Apple CarPlay**, **Android Auto**, and **navigation**.",
        "safety": "Safety features include **adaptive cruise control**, **lane departure warning**, **blind-spot monitoring**, and **automatic emergency braking**."
    },
    {
        "name": "Hummer Side View",
        "price": "PKR 50.0 - 60.0 Lacs",
        "rating": 4.0,
        "numReviews": 130,
        "imageUrl": "https://stickypng.com/wp-content/uploads/2023/07/580b585b2edbce24c47b2c76.png",
        "engineAndPerformance": "6-8 km/l",
        "fuelType": "Petrol / Diesel",
        "transmission": "Automatic",
        "transmissionDetails": "The **Hummer** uses a **6-speed automatic transmission**, built for power and handling tough terrains.",
        "exterior": "The **Hummer** has an unmistakable, **rugged exterior**, designed to tackle extreme conditions while offering a bold, military-inspired look.",
        "interior": "Inside, the **Hummer** combines **luxury** with **functionality**, featuring **premium seats**, **rugged interior materials**, and **advanced tech**.",
        "audio": "The **Hummer** features a **premium audio system**, delivering clear and powerful sound, perfect for off-road adventures.",
        "infotainment": "The **Hummer** comes with a **touchscreen system**, **Bluetooth**, **navigation**, and **voice control** for intuitive connectivity.",
        "safety": "Safety features include **rearview camera**, **forward collision alert**, **hill descent control**, and **traction control**."
    }    
];

// Function to generate car cards
function generateCarCards(startIndex, endIndex) {
    const carContainer = document.querySelector(".car-container");

    // Loop through car data and create cards
    carData.slice(startIndex, endIndex).forEach(car => {
        const carCard = document.createElement("div");
        carCard.classList.add("car-card");

        const carImage = document.createElement("img");
        carImage.src = car.imageUrl;
        carImage.alt = car.name;
        carCard.appendChild(carImage);

        const carName = document.createElement("h3");
        carName.textContent = car.name;
        carCard.appendChild(carName);

        const carPrice = document.createElement("p");
        carPrice.textContent = car.price;
        carCard.appendChild(carPrice);

        const carRating = document.createElement("div");
        carRating.classList.add("rating");

        // Add filled stars
        for (let i = 0; i < Math.round(car.rating); i++) {
            const star = document.createElement("span");
            star.textContent = "★";
            carRating.appendChild(star);
        }

        // Add empty stars
        for (let i = Math.round(car.rating); i < 5; i++) {
            const emptyStar = document.createElement("span");
            emptyStar.classList.add("empty");
            emptyStar.textContent = "★";
            carRating.appendChild(emptyStar);
        }

        const reviewsText = document.createElement("span");
        reviewsText.textContent = `(${car.numReviews} reviews)`;
        carRating.appendChild(reviewsText);

        carCard.appendChild(carRating);

        const buyButton = document.createElement("button");
        buyButton.classList.add("buy-button");
        buyButton.textContent = "Buy";
        carCard.appendChild(buyButton);

        // Add click event to the "Buy" button
        buyButton.addEventListener("click", () => {
            localStorage.setItem("selectedCar", JSON.stringify(car));
            window.open("details.html", "_blank"); // Open details.html in a new tab
        });

        carContainer.appendChild(carCard);
    });
}

// Initial load (first 4 cars)
let startIndex = 0;
let endIndex = 13;
generateCarCards(startIndex, endIndex);

// Load more cars
const loadMoreIcon = document.getElementById("load-more-icon");
loadMoreIcon.addEventListener("click", () => {
    startIndex = endIndex;
    endIndex = endIndex + 10;
    generateCarCards(startIndex, endIndex);
});

// On details page, show selected car details
if (window.location.pathname.includes("details.html")) {
    const selectedCar = JSON.parse(localStorage.getItem("selectedCar"));
    if (selectedCar) {
        document.body.innerHTML = `
            <h2>${selectedCar.name}</h2>
            <img src="${selectedCar.imageUrl}" alt="${selectedCar.name}">
            <p>Price: ${selectedCar.price}</p>
            <p>Rating: ${"★".repeat(Math.round(selectedCar.rating))}</p>
            <p>Reviews: ${selectedCar.numReviews}</p>
        `;
    }
}


//Cars Comparison
 // Function to display car details
 function showCarDetails(carIndex, containerId) {
    const car = carData[carIndex];
    const container = document.getElementById(containerId);

    if (!car) {
        container.innerHTML = "<p>No details available for this car.</p>";
        return;
    }

    const carDetails = `
        <h3>${car.name}</h3>
        <img src="${car.imageUrl}" alt="${car.name}" />
        <p><strong>Price:</strong> ${car.price}</p>
        <p><strong>Rating:</strong> ${car.rating} / 5 (${car.numReviews} reviews)</p>
        <p><strong>Engine & Performance:</strong> ${car.engineAndPerformance}</p>
        <p><strong>Fuel Type:</strong> ${car.fuelType}</p>
        <p><strong>Transmission:</strong> ${car.transmission}</p>
        <p><strong>Transmission Details:</strong> ${car.transmissionDetails}</p>
        <p><strong>Exterior:</strong> ${car.exterior}</p>
        <p><strong>Interior:</strong> ${car.interior}</p>
        <p><strong>Audio:</strong> ${car.audio}</p>
        <p><strong>Infotainment:</strong> ${car.infotainment}</p>
        <p><strong>Safety:</strong> ${car.safety}</p>
    `;

    container.innerHTML = carDetails;
}

// Event listener for the "View Details" button
document.getElementById('viewDetailsBtn').addEventListener('click', function() {
    const car1Index = parseInt(document.getElementById('car1').value);
    const car2Index = parseInt(document.getElementById('car2').value);

    if (isNaN(car1Index) || isNaN(car2Index) || car1Index === car2Index) {
        alert('Please select two different cars to compare.');
        return;
    }

    // Show the comparison container
    document.getElementById('comparison').style.display = 'flex';

    // Show the details for the selected cars
    showCarDetails(car1Index, 'car1-details');
    showCarDetails(car2Index, 'car2-details');
});