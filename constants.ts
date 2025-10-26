
import { Page } from './App';
import { NavLink, Testimonial, FaqCategory, GhanaCategoryData, BlogPost } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#about' },
  { name: 'The Exchange Program', href: '#program' },
  { name: 'Accommodation', href: '#accommodation' },
  { name: 'Study at KAAF University', href: '#university' },
  { name: 'Discover Ghana', href: '#ghana' },
  { name: 'Blog', href: '#blog' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Living in Ghana was a life-changing experience. The community at the hostel was amazing, and I made friends for life. The program was so well-organized and supportive.",
    name: "Jessica L.",
    program: "Semester in Ghana",
    image: "https://picsum.photos/id/237/100/100"
  },
  {
    quote: "Studying at KAAF University was challenging but rewarding. The cultural excursions opened my eyes to the beauty of Ghana. I felt safe and cared for every step of the way.",
    name: "David C.",
    program: "Full Year Exchange",
    image: "https://picsum.photos/id/238/100/100"
  },
  {
    quote: "My host family was the best part of my trip. They treated me like one of their own and taught me so much about Ghanaian culture. I'm so grateful for this opportunity.",
    name: "Maria G.",
    program: "Summer Immersion",
    image: "https://picsum.photos/id/239/100/100"
  }
];

export const FAQ_DATA: FaqCategory[] = [
    {
        category: "Application & Fees",
        items: [
            { question: "What are the eligibility requirements?", answer: "Applicants must be between 18-25 years old, currently enrolled in a post-secondary institution, and have a good academic standing. A passport valid for at least six months beyond your program end date is also required." },
            { question: "What is included in the program fee?", answer: "The program fee covers tuition at KAAF University, accommodation (hostel or host family), pre-departure support, arrival orientation, some cultural excursions, and 24/7 in-country support." },
            { question: "Are scholarships available?", answer: "We offer a limited number of partial scholarships based on merit and financial need. Please indicate your interest in your application, and we will provide you with the necessary forms." },
        ]
    },
    {
        category: "Safety & Support",
        items: [
            { question: "How do you ensure student safety?", answer: "Safety is our top priority. Our youth hostels are in secure, gated communities with 24/7 security personnel. Host families undergo a rigorous vetting process, including background checks and home inspections. We also provide a comprehensive orientation on local safety practices." },
            { question: "What kind of support is available in Ghana?", answer: "We have a dedicated in-country team available 24/7 for any emergencies. This team includes a Program Director, student coordinators, and support staff who provide academic, personal, and logistical support throughout your stay." },
        ]
    },
    {
        category: "Visas & Travel",
        items: [
            { question: "Do I need a visa to study in Ghana?", answer: "Yes, all international students require a student visa to study in Ghana. Our team will provide you with detailed instructions and supporting documents to guide you through the visa application process with the Ghanaian embassy or consulate in your home country." },
            { question: "Who books the flights?", answer: "Students are responsible for booking their own round-trip airfare to Accra's Kotoka International Airport (ACC). We provide recommended arrival dates and times to ensure you can be picked up by our staff." },
        ]
    },
     {
        category: "Life in Ghana",
        items: [
            { question: "What is the accommodation like?", answer: "You can choose between our modern youth hostels, which offer a vibrant community atmosphere with shared rooms and common areas, or a host family stay for a deeper cultural immersion. Both options are vetted for safety and comfort." },
            { question: "What should I pack?", answer: "We recommend light, breathable clothing suitable for a tropical climate. Include some smart-casual outfits for university and formal occasions, swimwear, comfortable walking shoes, insect repellent, and any personal medications. A detailed packing list will be provided upon acceptance." },
        ]
    }
];

export const GHANA_DETAILS: GhanaCategoryData = {
  "Tourist Sites": [
    { name: "Cape Coast Castle", description: "A historic castle known for its role in the transatlantic slave trade, offering poignant tours and a deep dive into Ghana's history.", image: "https://picsum.photos/600/400?random=30" },
    { name: "Kakum National Park", description: "Famous for its canopy walkway suspended over 30 meters above the rainforest floor, providing breathtaking views of the treetops and wildlife.", image: "https://picsum.photos/600/400?random=31" },
    { name: "Mole National Park", description: "Ghana's largest wildlife refuge, where you can go on a walking safari to see elephants, antelopes, monkeys, and various bird species in their natural habitat.", image: "https://picsum.photos/600/400?random=32" },
  ],
  "Food & Cuisine": [
    { name: "Jollof Rice", description: "A beloved West African one-pot rice dish cooked in a flavorful tomato-based sauce with spices. A must-try staple and a source of friendly national rivalry.", image: "https://picsum.photos/600/400?random=33" },
    { name: "Banku and Tilapia", description: "A fermented corn and cassava dough served with grilled tilapia. The dish is often accompanied by a spicy pepper sauce (shito) and onions.", image: "https://picsum.photos/600/400?random=34" },
    { name: "Fufu", description: "A staple food made from pounded cassava and plantains, typically served with a variety of rich and savory soups like groundnut soup or light soup.", image: "https://picsum.photos/600/400?random=35" },
  ],
  "Culture & Festivals": [
     { name: "Homowo Festival", description: "Celebrated by the Ga people, this festival 'hoots at hunger' and involves traditional drumming, dancing, and the sprinkling of 'kpokpoi', a special festive food.", image: "https://picsum.photos/600/400?random=36" },
     { name: "Kente Cloth Weaving", description: "Discover the intricate art of Kente weaving, a symbolic textile traditionally worn by Ashanti royalty. Each pattern and color has a specific meaning.", image: "https://picsum.photos/600/400?random=44" },
  ],
  "The People": [
     { name: "Ashanti People", description: "One of the major ethnic groups in Ghana, located in the central region. They are known for their rich history, the Golden Stool, and vibrant cultural traditions.", image: "https://picsum.photos/600/400?random=37" },
     { name: "Warm Hospitality", description: "Ghanaians are renowned for their friendliness and welcoming nature, often referred to with the phrase 'Akwaaba' (Welcome).", image: "https://picsum.photos/600/400?random=45" },
  ],
    "Nature & Wildlife": [
     { name: "Wli Waterfalls", description: "The highest waterfall in Ghana, located in the Volta Region. The scenic hike to the falls takes you through lush greenery and across flowing streams.", image: "https://picsum.photos/600/400?random=38" },
     { name: "Boabeng-Fiema Monkey Sanctuary", description: "A unique community where Mona and Black and White Colobus monkeys are considered sacred and live in harmony with the local people.", image: "https://picsum.photos/600/400?random=46" },
  ],
    "Vibrant Markets": [
     { name: "Makola Market", description: "A bustling, colorful open-air market in the heart of Accra. It's a sensory experience where you can find everything from textiles and beads to fresh produce.", image: "https://picsum.photos/600/400?random=39" },
     { name: "Kejetia Market", description: "One of the largest open-air markets in West Africa, located in Kumasi. A sprawling maze of stalls offering a vast array of goods and crafts.", image: "https://picsum.photos/600/400?random=47" },
  ],
};

export const BLOG_POSTS: BlogPost[] = [
    { 
        title: "My First Week in Accra", 
        author: "Jessica L.", 
        date: "October 10, 2023", 
        excerpt: "Landing in Accra was an explosion of senses. The warmth, the vibrant colors, the friendly faces... here's a recap of my first seven days adapting to a new, wonderful world.", 
        image: "https://picsum.photos/600/400?random=40",
        content: "The moment I stepped off the plane at Kotoka International Airport, I was greeted by a wave of warm, humid air – a stark contrast to the autumn chill I'd left behind. That warmth extended to the people. My program coordinator met me with a huge smile and a sign bearing my name, and the feeling of being welcomed immediately washed away any travel anxieties. The drive to the hostel was an experience in itself. The city of Accra is alive with a constant, energetic hum. Brightly colored tro-tros (minibuses) weave through traffic, street vendors sell everything from fresh pineapple to phone chargers, and music seems to drift from every corner. Our orientation week was packed but essential. We learned key phrases in Twi ('Akwaaba!' for welcome is my favorite), had lessons on everything from bargaining respectfully at the market to navigating the public transport system. It was a crash course in Ghanaian culture that felt more like an exciting adventure than a lecture. By the end of the week, I had not only settled into my new home but had also shared my first plate of Jollof rice with new friends, learned to laugh at my own fumbling attempts at the local handshake, and felt a profound sense of excitement for the semester ahead. This is just the beginning, but Ghana already feels like a second home."
    },
    { 
        title: "A Taste of Ghana: Beyond Jollof", 
        author: "David C.", 
        date: "October 15, 2023", 
        excerpt: "Everyone talks about Jollof rice, but Ghanaian cuisine is so much more. I explored street food stalls and local 'chop bars' to find the real, delicious deal.", 
        image: "https://picsum.photos/600/400?random=41",
        content: "Before coming to Ghana, my knowledge of the food was limited to one famous dish: Jollof rice. And while the Jollof here is undeniably incredible (and a matter of national pride!), I made it my mission to explore the full depth of Ghanaian cuisine. My culinary journey began on the streets. The aroma of roasting plantains, called 'kofi brokeman' (a nod to it being an affordable 'poor man's' meal), is everywhere. It's sweet, slightly smoky, and utterly addictive when paired with roasted groundnuts. Then there's the kelewele – spiced, fried plantain cubes that are the perfect blend of sweet and spicy. I quickly learned to never walk past a kelewele vendor without buying a small bag. Moving on from snacks, I ventured into 'chop bars,' the local eateries that serve up hearty, traditional meals. This is where I discovered banku, a fermented corn and cassava dough, served with grilled tilapia and a fiery pepper sauce called shito. The combination of textures and flavors was unlike anything I'd ever had. Fufu, made from pounded cassava and plantain, served with a rich groundnut soup, has become my go-to comfort food. It's a communal, hands-on experience that is as much about the process as the taste. Exploring the food of Ghana is to explore its culture, and I'm eating it all up, one delicious bite at a time."
    },
    { 
        title: "Navigating Campus Life at KAAF University", 
        author: "Maria G.", 
        date: "October 22, 2023", 
        excerpt: "From making friends with local students to finding the best study spots in the library, here are my tips for thriving academically and socially in a new environment.", 
        image: "https://picsum.photos/600/400?random=42",
        content: "The first day on the KAAF University campus felt like a big step. It's a beautiful, modern campus bustling with students. Initially, I was a bit intimidated, but that feeling quickly faded. The Ghanaian students are incredibly friendly and open. I found that simply asking for directions to a classroom would often turn into a long conversation and an invitation to join a study group. My advice to any new exchange student is to be proactive. Don't wait for people to come to you. Join a club – I joined the debate club and the cultural dance troupe, which have been amazing ways to make friends and learn new skills. Academically, the classes are engaging. The lecturers encourage participation, and I've been fascinated by the local perspectives on global topics in my international relations courses. The library has become my sanctuary for focused study; it's well-equipped and has quiet corners perfect for getting work done. But campus life isn't all about studying. The common areas are always full of students chatting, playing games, and collaborating on projects. There's a real sense of community here. Fully immersing myself in campus life has been key to my experience. It's not just about earning credits; it's about building connections and understanding a new educational culture from the inside out."
    },
];