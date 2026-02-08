export interface NewsEventItem {
  id: string;
  category: 'News' | 'Event';
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const newsEventsSeed: NewsEventItem[] = [
  {
    id: '1',
    category: 'Event',
    title: 'Spring Open House',
    date: 'March 15, 2026',
    excerpt: 'Join us for our annual Spring Open House to tour the campus, meet faculty, and learn about our programs.',
    content: 'We invite prospective families to join us for our Spring Open House on March 15th from 10:00 AM to 2:00 PM. This is a wonderful opportunity to experience St Martin School firsthand, tour our facilities, meet our dedicated faculty and staff, and learn about our comprehensive academic programs.\n\nThe day will include guided campus tours, classroom visits, student performances, and information sessions about admissions and financial aid. Light refreshments will be served. RSVP is appreciated but not required.',
  },
  {
    id: '2',
    category: 'News',
    title: 'Students Excel at Regional Science Fair',
    date: 'February 28, 2026',
    excerpt: 'St Martin School students brought home top honors from the Regional Science Fair, showcasing innovative projects.',
    content: 'We are proud to announce that our students achieved outstanding results at the Regional Science Fair held last weekend. Three of our high school students won first place in their respective categories, and five middle school students received honorable mentions.\n\nSenior Maria Chen won first place in Environmental Science for her project on sustainable water filtration systems. Junior David Park took top honors in Physics with his research on renewable energy efficiency. Sophomore Emma Williams earned first place in Biology for her study on local ecosystem biodiversity.\n\nThese achievements reflect the dedication of our students and the excellence of our science program. Congratulations to all participants and their faculty mentors!',
  },
  {
    id: '3',
    category: 'Event',
    title: 'Annual Arts Festival',
    date: 'April 20-22, 2026',
    excerpt: 'Three days of music, theater, and visual arts showcasing the incredible talents of our students.',
    content: 'Mark your calendars for our Annual Arts Festival, a three-day celebration of creativity and talent. The festival will feature student art exhibitions, musical performances, theatrical productions, and poetry readings.\n\nHighlights include the Spring Concert by our orchestra and choir, the debut of our spring play "A Midsummer Night\'s Dream," and a gallery opening featuring works from our visual arts students. All events are free and open to the public. Join us in celebrating the artistic achievements of our students!',
  },
  {
    id: '4',
    category: 'News',
    title: 'New STEM Lab Opens',
    date: 'February 10, 2026',
    excerpt: 'State-of-the-art STEM laboratory provides students with cutting-edge learning opportunities.',
    content: 'St Martin School is thrilled to announce the opening of our new STEM laboratory, a 3,000-square-foot facility equipped with the latest technology and resources for hands-on learning in science, technology, engineering, and mathematics.\n\nThe lab features robotics stations, 3D printers, advanced microscopy equipment, computer programming workstations, and collaborative project spaces. This investment in our facilities reflects our commitment to preparing students for the challenges and opportunities of the 21st century.\n\nThe STEM lab will serve students across all grade levels, with dedicated time for classes, clubs, and independent projects. We are grateful to our donors and community partners who made this facility possible.',
  },
  {
    id: '5',
    category: 'Event',
    title: 'Community Service Day',
    date: 'May 5, 2026',
    excerpt: 'Students, faculty, and families come together to serve our local community through various volunteer projects.',
    content: 'Our annual Community Service Day is scheduled for May 5th, bringing together the entire St Martin School community for a day of service and giving back. Students from all grade levels will participate in age-appropriate volunteer activities throughout the city.\n\nProjects include park cleanups, food bank assistance, reading to seniors at local care facilities, and helping with community garden maintenance. This event embodies our school values of compassion and service, teaching students the importance of contributing to their community.\n\nFamilies are encouraged to participate alongside students. More details and sign-up information will be available in March.',
  },
  {
    id: '6',
    category: 'News',
    title: 'Athletic Teams Celebrate Successful Season',
    date: 'January 25, 2026',
    excerpt: 'Multiple championship wins and outstanding sportsmanship mark another excellent year for St Martin athletics.',
    content: 'The winter sports season concluded with remarkable achievements across all our athletic programs. Our varsity basketball team won the regional championship, the swim team placed second at the state meet, and our wrestling team had three individual state champions.\n\nBeyond wins and losses, we are especially proud of the sportsmanship, teamwork, and dedication demonstrated by all our student-athletes. Several students received all-conference honors, and our athletic program was recognized for its commitment to academic excellence alongside athletic achievement.\n\nCongratulations to our coaches, athletes, and supportive families for another outstanding season!',
  },
  {
    id: '7',
    category: 'Event',
    title: 'Parent Education Workshop Series',
    date: 'Ongoing - Monthly',
    excerpt: 'Monthly workshops covering topics from academic support to social-emotional development.',
    content: 'St Martin School is pleased to offer a series of parent education workshops throughout the school year. These free monthly sessions provide valuable information and strategies for supporting your child\'s development and success.\n\nUpcoming topics include "Supporting Homework and Study Skills," "Navigating Social Media and Technology," "Understanding Adolescent Development," and "College Planning Timeline." Workshops are led by our faculty, counselors, and guest experts.\n\nAll sessions are held in the evening to accommodate working parents, with childcare provided. Check our website or contact the main office for the complete schedule and registration information.',
  },
  {
    id: '8',
    category: 'News',
    title: 'Alumni Spotlight: Dr. James Martinez',
    date: 'January 15, 2026',
    excerpt: 'Class of 2010 graduate returns to share his journey from St Martin School to medical research.',
    content: 'We were delighted to welcome back Dr. James Martinez, a 2010 graduate of St Martin School, who recently completed his medical degree and is now conducting cancer research at a leading university hospital.\n\nDr. Martinez spoke to our high school students about his educational journey, the importance of perseverance, and how his time at St Martin School laid the foundation for his success. He credited his science teachers with inspiring his passion for medicine and emphasized the value of the critical thinking skills he developed here.\n\nWe are incredibly proud of Dr. Martinez and all our alumni who are making positive contributions to their fields and communities. If you are an alumnus with a story to share, please contact our alumni relations office.',
  },
];
