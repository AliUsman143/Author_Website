// store/api/Authorcardapi.js

export const fetchAuthorCardData = () => {
    const arrydata = [
      {
        name: "Nikola Tesla",
        birth: "1856",
        death: "1943",
        image: "/img/nik.jpg",
        description: 
          "Nikola Tesla was a Serbian-American inventor, electrical engineer, mechanical engineer, and futurist known for his contributions to the design of the modern alternating current (AC) electricity supply system. Born on July 10, 1856, in Smiljan, Croatia, Tesla displayed an early aptitude for mathematics and physics. After completing his education in Europe, he immigrated to the United States in 1884, where he initially worked with Thomas Edison. However, he soon broke away to pursue his vision of AC electricity. Tesla's inventions included the Tesla coil, an induction coil used in radio technology, and he also pioneered technologies that would lead to modern wireless communication. His vision extended to many fields, including robotics, radar, and even wireless power transmission. Despite his groundbreaking work, Tesla struggled with financial difficulties and died alone in New York City in 1943. Today, he is celebrated as a visionary and a genius, with numerous inventions and theories that have shaped modern technology. His contributions to science and technology are honored worldwide, and he remains a symbol of innovation and scientific inquiry.",
        quotes: {
          1: "The present is theirs; the future, for which I really worked, is mine.",
          2: "If you want to find the secrets of the universe, think in terms of energy, frequency, and vibration.",
          3: "I don't care that they stole my idea... I care that they don't have any of their own.",
          4: "My brain is only a receiver, in the Universe there is a core from which we obtain knowledge, strength, and inspiration.",
          5: "The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence."
        },
      },
      {
        name: "Albert Einstein",
        birth: "1879",
        death: "1955",
        image: "/img/alb.jpg",
        description: 
          "Albert Einstein, born on March 14, 1879, in Ulm, Germany, is one of the most influential physicists of the 20th century. His work on the theory of relativity revolutionized our understanding of space, time, and gravity. In 1905, he published four groundbreaking papers, one of which introduced the world to the equation E=mc², establishing the equivalence of mass and energy. Einstein's theories reshaped the field of physics, paving the way for advancements in technology, from nuclear energy to GPS systems. Despite his immense contributions to science, he remained a humble individual who valued curiosity and imagination over mere knowledge. His insights extended beyond physics into philosophy, where he often expressed concerns about the implications of scientific advancements on humanity. After moving to the United States in 1933, he continued his research and became a prominent advocate for civil rights and pacifism. He passed away on April 18, 1955, leaving behind a legacy of intellectual curiosity and a deeper understanding of the universe.",
        quotes: {
          1: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
          2: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
          3: "I have no special talent. I am only passionately curious.",
          4: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
          5: "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
          6: "If you can't explain it to a six-year-old, you don't understand it yourself.",
          7: "Logic will get you from A to B. Imagination will take you everywhere.",
          8: "Try not to become a man of success, but rather try to become a man of value.",
          9: "The true sign of intelligence is not knowledge but imagination.",
          10: "Science without religion is lame, religion without science is blind."
        }
      },
      {
        name: "Dr Abdul Qadeer Khan",
        birth: "1936",
        death: "2021",
        image: "/img/abd.jpg",
        description: 
          "Dr Abdul Qadeer Khan, born on April 1, 1936, in Bhopal, India, is recognized as the father of Pakistan's nuclear program. After the partition of India, his family moved to Pakistan, where he pursued his education in metallurgical engineering. Khan's significant contributions to nuclear science began in the 1970s when he established Pakistan's uranium enrichment program, which was crucial for the country’s nuclear capabilities. His efforts culminated in Pakistan becoming the seventh nation in the world to possess nuclear weapons. Throughout his career, Khan advocated for scientific research and education as essential tools for national development. He received numerous awards for his contributions to science and was revered as a national hero in Pakistan. Despite facing controversies regarding nuclear proliferation, his dedication to his country and his scientific pursuits made him a prominent figure in global discussions on nuclear policy. Dr. Khan passed away on October 10, 2021, leaving a complex legacy intertwined with the history of nuclear science in Pakistan.",
        quotes: {
          1: "No nation can rise to the height of glory unless your men are strong, your women are educated, and your children are healthy.",
          2: "It is my firm belief that scientific research can lift a nation from poverty to prosperity.",
          3: "We need to focus on self-reliance and strength to protect our national interests.",
          4: "Scientific innovation is essential for national security and development.",
          5: "Knowledge and education are the true weapons of any nation.",
          6: "You don’t achieve greatness by merely following; you achieve greatness by leading the way.",
          7: "Technological advancements are the cornerstone of a prosperous and secure future.",
          8: "The world respects strength and innovation; we must strive for both.",
          9: "Nothing is impossible if you believe in the potential of your people.",
          10: "My life has been devoted to serving my country and empowering it through science."
        }
      },
      {
        name: "Sahil Adeem",
        birth: "1970",
        death: "present",
        image: "/img/sah.jpg",
        description: 
          "Sahil Adeem is a contemporary motivational speaker, leadership coach, and critical thinker born in 1970 in Pakistan. He is known for his engaging seminars and workshops focused on personal development, leadership skills, and critical thinking. With a strong emphasis on clarity of purpose, Adeem inspires individuals to recognize their potential and navigate their paths to success. He believes that self-awareness is fundamental to effective leadership and encourages individuals to cultivate a mindset of continuous learning. Adeem's approach combines practical strategies with philosophical insights, making his teachings applicable to various aspects of life and work. Through his work, he has motivated thousands to embrace change, challenge societal norms, and foster innovation. He advocates for the youth, urging them to take responsibility for their future and utilize their knowledge wisely. Adeem continues to influence many through his online platforms, books, and public speaking engagements, promoting a vision of a world where individuals strive for personal excellence and collective progress.",
        quotes: {
          1: "True leadership is about leading people towards purpose, not power.",
          2: "Critical thinking and questioning are the keys to awakening the mind.",
          3: "The world is full of distractions; focus on your purpose.",
          4: "You cannot lead until you learn to serve others.",
          5: "Self-awareness is the foundation of all personal growth.",
          6: "We are here to challenge the status quo, not to conform to it.",
          7: "The youth of today need to understand the responsibility that comes with knowledge.",
          8: "Clarity of thought precedes clarity of action.",
          9: "Innovation begins when we stop blindly following the norm.",
          10: "True change is not about revolution, but evolution in thought."
        }
      },
      {
        name: "Thomas Edison",
        birth: "1847",
        death: "1931",
        image: "/img/tho.jpg",
        description: 
          "Thomas Edison, born on February 11, 1847, in Milan, Ohio, is one of the most famous inventors in history. He is credited with developing many devices that greatly influenced life around the world, including the phonograph, the motion picture camera, and the electric light bulb. Edison's innovative spirit led him to establish the first industrial research laboratory in Menlo Park, New Jersey, where he produced inventions that would revolutionize modern living. His work in electrical engineering not only changed the way people consumed energy but also contributed to the birth of the modern electrical power industry. Despite facing numerous challenges and failures throughout his career, Edison famously claimed, “I have not failed. I’ve just found 10,000 ways that won’t work.” His perseverance and dedication to innovation have left a lasting impact on technology and culture. Edison's life story is a testament to the power of creativity, hard work, and relentless pursuit of one's dreams. He passed away on October 18, 1931, but his legacy lives on in countless technologies that shape our daily lives.",
        quotes: {
          1: "Genius is one percent inspiration and ninety-nine percent perspiration.",
          2: "I have not failed. I've just found 10,000 ways that won't work.",
          3: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
          4: "Your worth consists in what you are and not in what you have.",
          5: "Just because something doesn't do what you planned it to do doesn't mean it's useless.",
          6: "There’s a way to do it better—find it.",
          7: "What you are will show in what you do.",
          8: "The chief function of the body is to carry the brain around.",
          9: "If we did all the things we are capable of, we would literally astound ourselves.",
          10: "To invent, you need a good imagination and a pile of junk."
        }
      },
      {
        name: "Marie Curie",
        birth: "1867",
        death: "1934",
        image: "/img/mar.jpg",
        description: 
          "Marie Curie, born on November 7, 1867, in Warsaw, Poland, was a pioneering physicist and chemist who made groundbreaking contributions to the field of radioactivity. She was the first woman to win a Nobel Prize and remains the only person to have won Nobel Prizes in two different scientific fields—Physics and Chemistry. Her discovery of the elements radium and polonium and her work on radioactivity laid the foundation for the development of cancer treatments and the study of nuclear energy. Despite the health risks, Curie continued her research until her death on July 4, 1934. Her legacy is celebrated worldwide, and her research opened new frontiers in science and medicine.",
        quotes: {
          1: "Nothing in life is to be feared; it is only to be understood.",
          2: "Be less curious about people and more curious about ideas.",
          3: "I am among those who think that science has great beauty.",
          4: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
          5: "You cannot hope to build a better world without improving the individuals."
        }
      },
      {
        name: "Isaac Newton",
        birth: "1643",
        death: "1727",
        image: "/img/newton.jpg",
        description: 
          "Sir Isaac Newton, born on January 4, 1643, in Woolsthorpe, England, is widely regarded as one of the most influential scientists of all time. His work in mathematics, physics, and astronomy laid the groundwork for classical mechanics. In his book *Principia Mathematica*, Newton formulated the laws of motion and universal gravitation, which dominated the scientific view of the physical universe for the next three centuries. Newton also made significant contributions to the development of calculus and the study of optics. His curiosity and scientific rigor transformed our understanding of the universe, and his influence extends across multiple disciplines.",
        quotes: {
          1: "If I have seen further, it is by standing on the shoulders of giants.",
          2: "What we know is a drop, what we don't know is an ocean.",
          3: "I can calculate the motion of heavenly bodies, but not the madness of people.",
          4: "To every action, there is always opposed an equal reaction.",
          5: "Truth is ever to be found in simplicity, and not in the multiplicity and confusion of things."
        }
      },
      {
        name: "Leonardo da Vinci",
        birth: "1452",
        death: "1519",
        image: "/img/leo.jpg",
        description: 
          "Leonardo da Vinci, born on April 15, 1452, in Vinci, Italy, was a polymath whose genius spanned multiple disciplines, including painting, anatomy, engineering, and architecture. Known for masterpieces like the *Mona Lisa* and *The Last Supper*, Leonardo was also a visionary scientist, anticipating many modern technologies such as the helicopter, the tank, and solar power. His notebooks, filled with scientific diagrams and artistic sketches, demonstrate his curiosity about the natural world. Leonardo’s ability to merge art and science makes him one of the most remarkable figures in history. He passed away on May 2, 1519, but his legacy continues to inspire people across the world.",
        quotes: {
          1: "Learning never exhausts the mind.",
          2: "Simplicity is the ultimate sophistication.",
          3: "Art is never finished, only abandoned.",
          4: "The noblest pleasure is the joy of understanding.",
          5: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do."
        }
      },
      {
        name: "Galileo Galilei",
        birth: "1564",
        death: "1642",
        image: "/img/gal.jpg",
        description: 
          "Galileo Galilei, born on February 15, 1564, in Pisa, Italy, was a mathematician, physicist, and astronomer who played a crucial role in the scientific revolution. Often referred to as the 'father of modern science,' Galileo made groundbreaking discoveries, including improvements to the telescope and observations that supported the heliocentric theory of Copernicus. His work laid the foundation for modern physics and astronomy, despite facing opposition from the Catholic Church. Galileo's legacy is one of defiance in the pursuit of truth and scientific advancement, and his contributions continue to influence our understanding of the universe.",
        quotes: {
          1: "All truths are easy to understand once they are discovered; the point is to discover them.",
          2: "I do not feel obliged to believe that the same God who has endowed us with sense, reason, and intellect has intended us to forgo their use.",
          3: "You cannot teach a man anything; you can only help him find it within himself.",
          4: "Wine is sunlight, held together by water.",
          5: "In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual."
        }
      },
      {
        name: "Stephen Hawking",
        birth: "1942",
        death: "2018",
        image: "/img/step.jpg",
        description: 
          "Stephen Hawking, born on January 8, 1942, in Oxford, England, was one of the most brilliant theoretical physicists of modern times. He made significant contributions to cosmology, particularly in the study of black holes and the nature of the universe. His book, *A Brief History of Time*, became an international bestseller, making complex scientific concepts accessible to the general public. Diagnosed with a rare form of ALS at 21, Hawking continued his research despite being almost completely paralyzed. His courage and determination to unlock the mysteries of the universe made him a symbol of intellectual perseverance. He passed away on March 14, 2018, leaving a profound legacy in science and cosmology.",
        quotes: {
          1: "Intelligence is the ability to adapt to change.",
          2: "However difficult life may seem, there is always something you can do and succeed at.",
          3: "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
          4: "Life would be tragic if it weren't funny.",
          5: "We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the universe. That makes us something very special."
        }
      },
      {
        name: "James Baldwin",
        birth: "1924",
        death: "1987",
        image: "/img/jam.jpg",
        description: 
          "James Baldwin, born on August 2, 1924, in Harlem, New York, was an American writer, playwright, and social critic. Known for his powerful works exploring race, identity, and sexuality, Baldwin's writing often drew from his experiences growing up as a Black man in America. His essays, such as 'Notes of a Native Son,' and novels like 'Go Tell It on the Mountain' and 'Giovanni's Room,' helped shape the dialogue on civil rights and race relations in the 20th century. Baldwin’s activism and writing influenced generations of readers and writers, positioning him as one of the most important voices in American literature. He passed away on December 1, 1987, but his work continues to resonate in modern discussions about race, identity, and justice.",
        quotes: {
          1: "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
          2: "The place in which I'll fit will not exist until I make it.",
          3: "Love takes off masks that we fear we cannot live without and know we cannot live within.",
          4: "You have to decide who you are and force the world to deal with you, not with its idea of you.",
          5: "The most dangerous creation of any society is the man who has nothing to lose."
        }
      },
      {
        name: "Maya Angelou",
        birth: "1928",
        death: "2014",
        image: "/img/may.jpg",
        description: 
          "Maya Angelou, born Marguerite Annie Johnson on April 4, 1928, in St. Louis, Missouri, was an acclaimed poet, memoirist, and civil rights activist. Her autobiographical series, beginning with 'I Know Why the Caged Bird Sings,' received widespread recognition for its depiction of her early life and the struggles she faced with racism, identity, and trauma. A powerful voice for justice and equality, Angelou’s poetry and speeches have inspired millions around the world. In addition to her literary career, she was a prominent figure in the Civil Rights Movement, working with leaders such as Martin Luther King Jr. and Malcolm X. Angelou’s ability to articulate the Black experience in America earned her many accolades, and her legacy as a literary and cultural icon remains strong. She passed away on May 28, 2014.",
        quotes: {
          1: "You may not control all the events that happen to you, but you can decide not to be reduced by them.",
          2: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
          3: "We may encounter many defeats, but we must not be defeated.",
          4: "Try to be a rainbow in someone's cloud.",
          5: "If you don't like something, change it. If you can't change it, change your attitude."
        }
      },
    ];
  
    return arrydata;
  };
  