
/////////to search something

//let string="hello!!Good morning"
//let out=string.match(/hello/)
//console.log(out)

//******************************************
// let string=`paragraph is 456789 youtube@gmail.com a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into okk@gmail.com paragraphs. This is because paragraphs show a reader where fine@gmail.com the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.
// Paragraphs can contain many something@gmail.com different  kinds of information.A paragraph could contain a series of brief examples or a single long illustration of a general point. It might describe a place, character, or process; narrate a series of events; compare or contrast two or more things; classify items into categories; or describe causes and effects. Regardless of the kind of information they contain, all paragraphs share certain characteristics. One of the most important of these is a topic sentence.`
// //let pattern=/\w+\@\w+\.\w+/g
// let out=string.match(pattern)
// console.log(out)

//************************************************
///TO CHECK THE PARAGRAPH IS START FROM
let string=`Games are fantastic for learning at any age, but they are particularly important for young learners. Research has shown that games are essential for healthy development in early childhood and beyond.

games Play lets children practise what  games they know, and also what they don’t. It allows them to experiment through trial and error, find solutions to problems, work out the best strategies, and build new confidence and skills. In our busy lives, it can be easy to forget the value of play. We often think play is not a good use of time and children should be doing some ‘proper’ learning instead.

But doctors and educators believe that we should see play as serious learning. Through play, children develop thinking skills and abilities that help them to succeed in their future, including in language learning. The balance of enjoyment and challenge makes games such amazing tools for learning.`
//let pattern=/^\w+/g
//let pattern2=/^games/gi
//let pattern=/^games/gim
// let pattern=/^but/gim
// let output =string.match(pattern)
// console.log(output)

//********************************************************
//let str=`Education is one of the most important aspects of our lives. It helps us to be better citizens and to be better people. It is the key to success in life. Education gives us the knowledge and skills we need to be successful in our careers and in our lives. It helps us to better understand the world around us and to make better decisions. Education is the foundation of our society and it is the key to a better future for all of us.
//The primary goal of education should be empowering individuals to be successful in life. Secondary goals include establishing values, social skills, and work ethic. A good education system produces good citizens who are well-educated, well-mannered and disciplined. A good education system helps in the development of a country. It helps in the advancement of technology and science. It helps in the development of the economy of the country. A good education system opens up the doors of employment and business opportunities for the people of the country. A good education system makes the people of the country more responsible and knowledgeable.`
//let pattern=/knowledgeable.$/gmi
//let pattern=/\w{11}/gim    #### to get the word with 10 characters
//let pattern=/\w{11,}/gim     #### to get the complete word
//let pattern=/\w{5,7}/gim      #### to get at least five character and maximum seven character
//let out=str.match(pattern)
//console.log(out)


let str=`The primary goal 4567 of education@gmail.com should be empowering individuals to be successful in life. Secondary@gmail.com goals include establishing values, social skills, and work ethic. A good education system produces good citizens who are well-educated, well-mannered and disciplined. A good education system helps in the development of a country. It helps in the advancement of technology and science. It helps in the development of the economy of the country. A good education system opens up the doors of employment and business opportunities for the people of the country. A good education system makes the people of the country more responsible and knowledgeable.`
//let pattern=/[pg]+/gmi
//let pattern=/[\a-z]+/gmi #####to display all the characters
//let pattern=/[pg\@]+/gmi
//let pattern=/[\d+]+/gim
//let pattern=  /[a-z0-9]+/gim   ###### to get all the number and character
let out=str.match(pattern)
console.log(out)