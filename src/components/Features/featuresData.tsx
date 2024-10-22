import { Feature } from "@/types/feature";

const featuresData: Feature[] = [

  {
    id: 1,
    icon: (
      <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
        width="100px" height="50px" viewBox="0 0 943.2 943.2"
      >
        <g>
          <g>
            <path d="M204.2,564.3c-56.9,0-103.2,46.3-103.2,103.2s46.3,103.2,103.2,103.2s103.2-46.3,103.2-103.2S261.1,564.3,204.2,564.3z
          M204.2,714.2c-25.8,0-46.7-21-46.7-46.8c0-25.801,21-46.801,46.7-46.801c25.8,0,46.8,21,46.8,46.801
         C251,693.2,230,714.2,204.2,714.2z"/>
            <path d="M733.1,564.3c-56.899,0-103.2,46.3-103.2,103.2S676.2,770.7,733.1,770.7c56.9,0,103.2-46.3,103.2-103.2
         S790,564.3,733.1,564.3z M779.899,667.5c0,25.8-21,46.8-46.8,46.8s-46.8-21-46.8-46.8s21-46.8,46.8-46.8
         S779.899,641.7,779.899,667.5z"/>
            <path d="M915.6,562.2h-12.7L902.7,300.8c0-15.2-12.301-27.5-27.5-27.5H368.7c-8.801,0-17.2,4.3-22.4,11.5l-101.7,142L75.4,426.4
         c-15.2,0-27.5,12.3-27.5,27.5V562.1L27.8,561.9h-0.3C12.3,561.9,0,574.2,0,589.4v30c0,15,12.2,27.399,27.2,27.5h45.6
         c0,0,2.2-10.9,3.8-16.301c1.5-5.3,3.4-10.5,5.6-15.6c2.2-5.1,4.7-10,7.5-14.7c2.8-4.8,5.9-9.3,9.2-13.7c3.4-4.399,7-8.6,10.9-12.5
         c2.6-2.699,5.4-5.199,8.2-7.6c24-20.5,54.6-31.8,86.1-31.8c31.6,0,62.2,11.3,86.2,31.8c23.7,20.3,39.6,48.3,44.8,78.9l0.3,2.1
         h266.5l0.4-2.1c5.1-30.601,21-58.601,44.8-78.9c24-20.5,54.601-31.8,86.2-31.8s62.2,11.3,86.2,31.8c23.7,20.3,39.6,48.3,44.7,78.9
         l0.3,2.1h51.2c15.199,0,27.5-12.3,27.5-27.5v-30.2C943.1,574.5,930.8,562.2,915.6,562.2z M449.2,429.3H327.399
         c-12.199,0-19.3-13.8-12.199-23.7l56.3-79c4.7-6.6,12.3-10.5,20.399-10.5h57.5c13.801,0,25,11.2,25,25v63.2
         C474.2,418.1,463,429.3,449.2,429.3z M545.1,341.2c0-6,2.3-11.7,6.601-15.9c4.199-4.2,9.899-6.6,15.899-6.6h256
         c6,0,11.7,2.3,15.9,6.6c4.2,4.3,6.6,9.9,6.6,15.9v63.2c0,12.399-10.1,22.5-22.5,22.5h-256c-12.399,0-22.5-10.101-22.5-22.5V341.2z
         "/>
            <path d="M424.6,172.5c-19.3,0-35,15.7-35,35s15.7,35,35,35h422c19.3,0,35-15.7,35-35s-15.7-35-35-35H424.6z" />
          </g>
        </g>
      </svg>

    ),
    title: "Diverse Vehicle Options",
    paragraph: "Choose from a wide range of vehicles to suit your needs. From compact cars perfect for city driving to spacious SUVs for family adventures, and even luxury vehicles for special occasions, we have the perfect car for every journey.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 2,
    icon: (
      <svg width="60px" height="60px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M15.0549 39H23V31.0549C18.8284 31.5161 15.5161 34.8284 15.0549 39ZM25 31.0549V39H32.9451C32.4839 34.8284 29.1716 31.5161 25 31.0549ZM32.9452 41C32.8055 42.2647 32.4041 43.4491 31.7966 44.4993L33.5278 45.5007C34.4643 43.8818 35 42.0019 35 40C35 33.9249 30.0751 29 24 29C17.9249 29 13 33.9249 13 40C13 42.0019 13.5357 43.8818 14.4722 45.5007L16.2034 44.4993C15.5959 43.4491 15.1945 42.2647 15.0548 41H32.9452Z" fill="#ffffff" />
        <path d="M27 40C27 41.6569 25.6569 43 24 43C22.3431 43 21 41.6569 21 40C21 38.3431 22.3431 37 24 37C25.6569 37 27 38.3431 27 40Z" fill="#ffffff" />
        <path d="M31.5846 36.8449C31.2987 35.778 31.9319 34.6813 32.9988 34.3954L34.9307 33.8778C35.9976 33.5919 37.0943 34.2251 37.3801 35.292L38.4154 39.1557C38.7013 40.2227 38.0681 41.3193 37.0012 41.6052L35.0694 42.1229C34.0024 42.4087 32.9058 41.7756 32.6199 40.7086L31.5846 36.8449Z" fill="#ffffff" />
        <path d="M10.6199 35.2912C10.9058 34.2243 12.0024 33.5911 13.0694 33.877L15.0012 34.3947C16.0681 34.6805 16.7013 35.7772 16.4154 36.8441L15.3802 40.7078C15.0943 41.7748 13.9976 42.4079 12.9307 42.1221L10.9988 41.6044C9.93188 41.3185 9.29871 40.2219 9.5846 39.1549L10.6199 35.2912Z" fill="#ffffff" />
        <path fillRule="evenodd" clipRule="evenodd" d="M15 17V14H17V17C17 20.866 20.134 24 24 24C27.866 24 31 20.866 31 17V14H33V17C33 21.9706 28.9706 26 24 26C19.0294 26 15 21.9706 15 17Z" fill="#ffffff" />
        <path fillRule="evenodd" clipRule="evenodd" d="M13.7943 11H34.2494C34.3213 10.8165 34.3989 10.6002 34.4762 10.3526L34.4883 10.3139C34.758 9.45061 35 8.67596 35 7.09677C35 6.29597 34.4797 5.62166 33.791 5.08848C33.0932 4.54829 32.1402 4.08579 31.0787 3.7088C28.9529 2.95383 26.2719 2.5 24 2.5C21.7281 2.5 19.0471 2.95383 16.9213 3.7088C15.8598 4.08579 14.9068 4.54829 14.209 5.08848C13.5203 5.62166 13 6.29597 13 7.09677C13 8.56283 13.2452 9.33549 13.4971 10.1295L13.4971 10.1295C13.5206 10.2035 13.5441 10.2776 13.5675 10.3525C13.6448 10.6001 13.7224 10.8164 13.7943 11ZM20 8C20 7.44772 20.4477 7 21 7H27C27.5523 7 28 7.44772 28 8C28 8.55228 27.5523 9 27 9H21C20.4477 9 20 8.55228 20 8Z" fill="#ffffff" />
        <path fillRule="evenodd" clipRule="evenodd" d="M14.0214 13.4106C14.0668 13.1728 14.2845 13 14.5386 13H33.4614C33.7155 13 33.9332 13.1728 33.9786 13.4106L33.9788 13.4118L33.9791 13.413L33.9796 13.4159L33.9808 13.4227L33.9837 13.4409C33.9858 13.455 33.9882 13.4731 33.9905 13.4948C33.9951 13.5383 33.9993 13.5967 33.9999 13.6678C34.0011 13.8101 33.988 14.0048 33.9341 14.2341C33.8251 14.6976 33.5533 15.2868 32.9308 15.8594C31.6967 16.9946 29.1612 18 24 18C18.8388 18 16.3033 16.9946 15.0692 15.8594C14.4467 15.2868 14.1749 14.6976 14.0659 14.2341C14.012 14.0048 13.9989 13.8101 14.0001 13.6678C14.0007 13.5967 14.0049 13.5383 14.0095 13.4948C14.0118 13.4731 14.0142 13.455 14.0163 13.4409L14.0192 13.4227L14.0204 13.4159L14.0209 13.413L14.0212 13.4118L14.0214 13.4106Z" fill="#ffffff" />
      </svg>
    ),
    title: "Experienced Local Driver-Guides",
    paragraph: "Experience Madagascar like a local.Our car rental service includes experienced local driver-guides, ensuring you navigate the island with ease and uncover hidden gems along the way.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 2,
    icon: (
      <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M9 2L8.93417 2C8.04768 1.99995 7.28387 1.99991 6.67221 2.08215C6.01669 2.17028 5.38834 2.36902 4.87868 2.87868C4.36902 3.38835 4.17027 4.0167 4.08214 4.67221C3.9999 5.28387 3.99995 6.04769 4 6.93417L4 7V10.5V16.1707C2.83481 16.5825 2 17.6938 2 19C2 20.6569 3.34315 22 5 22H15.9966L16 22C17.6569 22 19 20.6569 19 19V9.00001V7.00001H19.5C20.8807 7.00001 22 5.88072 22 4.50001C22 3.11929 20.8807 2.00001 19.5 2.00001C19.3961 2.00001 19.2937 2.00634 19.1932 2.01865C19.1307 2.00641 19.0661 2 19 2H9ZM13.1707 20C13.0602 19.6872 13 19.3506 13 19V18H5C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20H13.1707ZM19 5.00001H19.5C19.7761 5.00001 20 4.77615 20 4.50001C20 4.22386 19.7761 4.00001 19.5 4.00001C19.2239 4.00001 19 4.22386 19 4.50001V5.00001ZM8 7C8 6.44772 8.44772 6 9 6H14C14.5523 6 15 6.44772 15 7C15 7.55228 14.5523 8 14 8H9C8.44772 8 8 7.55228 8 7ZM9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12H14C14.5523 12 15 11.5523 15 11C15 10.4477 14.5523 10 14 10H9Z" fill="#ffffff" />
      </svg>
    ),
    title: "Flexible Rental Terms",
    paragraph: "Enjoy the flexibility of our rental options. Whether you need a car for a day, a week, or even longer, we offer short-term and long-term rentals with the option to extend or shorten your rental period as needed",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 3,
    icon: (
      <svg width="60px" height="60px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M10.4894 29.3487V34.5488C10.4894 35.6534 11.3848 36.5488 12.4894 36.5488H42.4894C43.5939 36.5488 44.4894 35.6534 44.4894 34.5488V18.5488C44.4894 17.4443 43.5939 16.5488 42.4894 16.5488H35.6339V18.5488H39.4905C39.491 18.9415 39.5686 19.3302 39.7188 19.693C39.8696 20.0569 40.0906 20.3877 40.3692 20.6662C40.6477 20.9448 40.9785 21.1658 41.3424 21.3166C41.7061 21.4672 42.0958 21.5448 42.4894 21.5449V31.5489C42.1014 31.5511 41.7174 31.6287 41.3588 31.7772C40.9948 31.928 40.6641 32.1489 40.3855 32.4275C40.1069 32.7061 39.886 33.0368 39.7352 33.4008C39.5844 33.7648 39.5068 34.1549 39.5068 34.5488H15.4852C15.4804 34.1677 15.403 33.7908 15.2571 33.4384C15.1063 33.0744 14.8853 32.7437 14.6067 32.4651C14.3282 32.1865 13.9975 31.9655 13.6335 31.8148C13.2707 31.6645 12.882 31.5869 12.4894 31.5864V29.3487H10.4894Z" fill="#ffffff" />
        <path d="M24.5106 21.4512C24.5106 23.6603 22.7198 25.4512 20.5106 25.4512C18.3015 25.4512 16.5106 23.6603 16.5106 21.4512C16.5106 19.242 18.3015 17.4512 20.5106 17.4512C22.7198 17.4512 24.5106 19.242 24.5106 21.4512Z" fill="#ffffff" />
        <path fillRule="evenodd" clipRule="evenodd" d="M5.51062 11.4512C4.40605 11.4512 3.51062 12.3466 3.51062 13.4512V29.4512C3.51062 30.5557 4.40605 31.4512 5.51062 31.4512H35.5106C36.6152 31.4512 37.5106 30.5557 37.5106 29.4512V13.4512C37.5106 12.3466 36.6152 11.4512 35.5106 11.4512H5.51062ZM8.50879 13.4512H32.5117C32.5122 13.8438 32.5898 14.2325 32.7401 14.5953C32.8908 14.9593 33.1118 15.29 33.3904 15.5686C33.669 15.8472 33.9997 16.0681 34.3637 16.2189C34.7273 16.3695 35.117 16.4471 35.5106 16.4473V26.4512C35.1226 26.4535 34.7386 26.531 34.38 26.6795C34.016 26.8303 33.6853 27.0513 33.4068 27.3299C33.1282 27.6084 32.9072 27.9391 32.7564 28.3031C32.6057 28.6671 32.5281 29.0572 32.5281 29.4512H8.50643C8.50165 29.07 8.42427 28.6931 8.2783 28.3407C8.12754 27.9767 7.90656 27.646 7.62799 27.3674C7.34941 27.0889 7.01869 26.8679 6.65472 26.7171C6.29196 26.5669 5.90324 26.4893 5.51062 26.4888L5.51062 16.4512C5.90396 16.4509 6.29343 16.3733 6.65684 16.2228C7.02082 16.072 7.35153 15.8511 7.63011 15.5725C7.90869 15.2939 8.12966 14.9632 8.28043 14.5992C8.43119 14.2352 8.50879 13.8451 8.50879 13.4512Z" fill="#ffffff" />
      </svg>
    ),
    title: "Competitive and Transparent Pricing",
    paragraph: "Benefit from our competitive pricing with no hidden fees. We offer clear and affordable rates, along with special discounts for early bookings and loyalty programs to reward our regular customers.",
    btn: "Learn More",
    btnLink: "/#",
  }, {
    id: 4,
    icon: (
      <svg width="80px" height="80px" viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg"   >
        <path fill="#ffffff" fillOpacity="1" strokeWidth="0.2" strokeLinejoin="round" d="M 58.5833,45.9167L 58.5833,57L 19,57L 19,45.9167L 28.8998,45.9167C 31.0306,47.2793 33.6795,48.4476 36.6434,49.2418C 40.3467,50.2341 44.7079,50.4746 47.6249,50.0692L 47.6249,45.9167L 58.5833,45.9167 Z M 56.2083,48.2917L 53.4374,48.2917L 53.4374,53.0417L 56.2082,53.0417L 56.2083,48.2917 Z M 45.7433,48.2824C 43.1578,48.6418 39.9938,48.0327 36.7113,47.1532C 31.1866,45.6728 26.8965,42.7258 25.5163,39.7952L 32.2902,33.0213L 45.7433,38.0663L 45.7433,48.2824 Z M 39.2905,28.1719C 39.6351,28.1719 39.9737,28.1941 40.3047,28.2368L 46.0048,17.0498L 49.0712,18.6122L 43.5443,29.4594C 45.1454,30.5622 46.1735,32.2733 46.1735,34.1946C 46.1735,35.0197 45.9839,35.806 45.6407,36.5221L 33.4151,31.7762C 34.4796,29.6541 36.4722,28.1719 39.2905,28.1719 Z " />
      </svg>
    ),
    title: "Clean and Well-Maintained Vehicles",
    paragraph: "Travel with peace of mind knowing that all our vehicles are clean, well-maintained, and regularly serviced. We ensure that every car meets the highest standards of hygiene and performance.",
    btn: "Learn More",
    btnLink: "/#",
  }, {
    id: 5,
    icon: (
      <svg fill="#ffffff" width="80px" height="80px" viewBox="-5 -5 35 35" ><path d="M11.86,2L11.34,3.93C15.75,4.78 19.2,8.23 20.05,12.65L22,12.13C20.95,7.03 16.96,3.04 11.86,2M10.82,5.86L10.3,7.81C13.34,8.27 15.72,10.65 16.18,13.68L18.12,13.16C17.46,9.44 14.55,6.5 10.82,5.86M3.72,9.69C3.25,10.73 3,11.86 3,13C3,14.95 3.71,16.82 5,18.28V22H8V20.41C8.95,20.8 9.97,21 11,21C12.14,21 13.27,20.75 14.3,20.28L3.72,9.69M9.79,9.76L9.26,11.72A3,3 0 0,1 12.26,14.72L14.23,14.2C14,11.86 12.13,10 9.79,9.76Z" /></svg>
    ),
    title: "Modern Technological Features (Optional)",
    paragraph: "Our vehicles come equipped with high-speed satellite internet connection to make your journey more comfortable and enjoyable.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 6,
    icon: (
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="37px" height="37px" viewBox="0 0 64 64">
        <path fill="#ffffff" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
	C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
	C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"/>
      </svg>
    ),
    title: "Convenient Pickup and Drop-off Locations",
    paragraph: "Enjoy the convenience of multiple pickup and drop-off locations across Madagascar. Whether you’re arriving at the airport or need a car in the city center, we make it easy for you to start your journey.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 7,
    icon: (
      <svg fill="#ffffff" height="37px" width="37px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 60 60">
   <g>
     <path d="M34.4,26.3c0.041,0.031,0.088,0.045,0.131,0.069c0.035,0.019,0.067,0.039,0.103,0.054c0.118,0.047,0.241,0.078,0.365,0.078
       c0,0,0,0,0.001,0l0.001,0c0.136,0,0.268-0.036,0.396-0.092c0.039-0.017,0.072-0.042,0.109-0.064c0.05-0.03,0.104-0.049,0.149-0.088
       L44,19.023V24.5c0,0.552,0.448,1,1,1s1-0.448,1-1v-7.21l4.655-4.034c0.417-0.362,0.462-0.994,0.101-1.411
       c-0.362-0.417-0.993-0.463-1.411-0.101l-4.336,3.758c-0.003,0-0.006-0.002-0.009-0.002h-9c-0.552,0-1,0.448-1,1s0.448,1,1,1h6.704
       l-7.749,6.716L31.6,21.7c-0.443-0.332-1.069-0.241-1.4,0.2c-0.332,0.442-0.242,1.069,0.2,1.4L34.4,26.3z"/>
     <path d="M9,18.5h1.09c0.154,0.909,0.51,1.749,1.025,2.471l-0.772,0.772c-0.391,0.391-0.391,1.023,0,1.414
       c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l0.772-0.772C13.251,22.9,14.091,23.256,15,23.41v1.09
       c0,0.552,0.448,1,1,1s1-0.448,1-1v-1.09c0.909-0.154,1.749-0.51,2.471-1.025l0.772,0.772c0.195,0.195,0.451,0.293,0.707,0.293
       s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-0.772-0.772c0.515-0.722,0.871-1.562,1.025-2.471H23
       c0.552,0,1-0.448,1-1s-0.448-1-1-1h-1.09c-0.154-0.909-0.51-1.749-1.025-2.471l0.772-0.772c0.391-0.391,0.391-1.023,0-1.414
       s-1.023-0.391-1.414,0l-0.772,0.772C18.749,12.1,17.909,11.744,17,11.59V10.5c0-0.552-0.448-1-1-1s-1,0.448-1,1v1.09
       c-0.909,0.154-1.749,0.51-2.471,1.025l-0.772-0.772c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l0.772,0.772
       c-0.515,0.722-0.871,1.562-1.025,2.471H9c-0.552,0-1,0.448-1,1S8.448,18.5,9,18.5z"/>
     <path d="M20,27.5c0-0.552-0.448-1-1-1h-9c-0.552,0-1,0.448-1,1s0.448,1,1,1h9C19.552,28.5,20,28.052,20,27.5z"/>
     <path d="M22,29.5h-8c-0.552,0-1,0.448-1,1s0.448,1,1,1h8c0.552,0,1-0.448,1-1S22.552,29.5,22,29.5z"/>
     <path d="M49,28.5h-2c-0.552,0-1,0.448-1,1s0.448,1,1,1h2c0.552,0,1-0.448,1-1S49.552,28.5,49,28.5z"/>
     <path d="M31,30.5h3c0.552,0,1-0.448,1-1s-0.448-1-1-1h-3c-0.552,0-1,0.448-1,1S30.448,30.5,31,30.5z"/>
     <path d="M42,28.5h-3c-0.552,0-1,0.448-1,1s0.448,1,1,1h3c0.552,0,1-0.448,1-1S42.552,28.5,42,28.5z"/>
     <path d="M0,43.001c0,2.48,2.018,4.499,4.499,4.499h17.855c0.142,1.752-0.618,3.481-2.023,4.472l-1.799,1.269
       c-0.115,0.08-0.212,0.177-0.291,0.285C16.985,53.658,16,54.71,16,56c0,1.378,1.122,2.5,2.5,2.5h23c1.378,0,2.5-1.122,2.5-2.5
       c0-1.289-0.985-2.341-2.239-2.474c-0.078-0.106-0.173-0.202-0.286-0.281l-1.804-1.271c-1.408-0.992-2.169-2.724-2.025-4.474h17.855
       c2.48,0,4.499-2.018,4.499-4.499V38.5H0V43.001z M35.642,47.5c-0.134,2.33,0.882,4.619,2.728,6H21.63
       c1.847-1.381,2.863-3.67,2.729-6H35.642z"/>
     <path d="M55.501,1.5H4.499C2.018,1.5,0,3.518,0,5.999V36.5h60V5.999C60,3.518,57.982,1.5,55.501,1.5z M25,34.5H5v-28h20V34.5z
        M55,34.5H27v-28h28V34.5z"/>
   </g>
   </svg>
    ),
    title: "Easy Online Booking",
    paragraph: `Just do it with an email. Whether it’s a spontaneous trip or a well-planned journey, you can book your car rental in Madagascar quickly and effortlessly through a simple email.📨`,
   //\n Simply provide the following details in your email:\n Pick-up location,\n Drop-off location,\n Travel itinerary (major stops),\n Desired vehicle type,\n Travel dates and times.\n It’s that easy!
    // Experience the convenience of our user-friendly online booking system. Whether you’re planning a last-minute trip or organizing a detailed itinerary, our platform allows you to book your car rental in Madagascar quickly and effortlessly
    btn: "Learn More",
    btnLink: "/#",
  }

];
export default featuresData;
