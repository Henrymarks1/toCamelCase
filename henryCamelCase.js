function toCamelCase(str){
    let final = ''
     str = str.split(/_|-/)
    for(i=0;i<str.length;i++){
      word = str[i]
      if(word[0].toUpperCase() != word[0] && i != 0){
        str[i] = str[i].replace(word[0],word[0].toUpperCase())}
      final +=str[i]
    }
    console.log(final)
  }
  toCamelCase('henry_marks-dskjad')