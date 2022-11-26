import words from './words.txt'

export const generateWords =  async () => {
    let wordBank;
    let todayWord;
    await fetch(words).then((response)=>response.text()).then((result)=>{
        const wordArr=result.split("\n")
        todayWord=wordArr[Math.trunc(Math.random()*wordArr.length)]
        wordBank=new Set(wordArr);
    })
    return {wordBank,todayWord};
}

  