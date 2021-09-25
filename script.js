function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }
  
  const friends = {
    name: ['Rachel', 'Monica', 'Joey', 'Chandlers', 'Phoebe', 'Ross'],
    sentence: ["how you doin'?", 'we were on a break!', 'seven, seven, seven!', 'my eyes! MY EYES!!!', 'I WANT TO QUIT THE GYM!'],
    couples: ['Rachel and Ross', 'Monica and Richard', 'Monica and Chandler', 'Phoebe and Mike', 'Cip and Duck']
  }
  
  let personalTaste = []
  
  for(let prop in friends) {
    let optionIndex = generateRandomNumber(friends[prop].length)

    switch(prop) {
      case 'name':
        personalTaste.push(`Your personal character is "${friends[prop][optionIndex]}".`)
        break
      case 'sentence':
        personalTaste.push(`You favourite sentence is: "${friends[prop][optionIndex]}".`)
        break
      case 'couples':
        personalTaste.push(`Your ideal couple is: "${friends[prop][optionIndex]}".`)
        break
      default:
        personalTaste.push('There is not enough info.')
    }
  }
  
  function formatFriends(yourfriends) {
    const formatted = personalTaste.join('\n')
    console.log(formatted)
  }
  
  formatFriends(personalTaste);