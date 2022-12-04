class Dictionary {
   constructor (name) {
      this.name = name,
      this.words = {}
   }
   add (word, description){
      this.words[word]={word:word, description: description}
   }
   remove (word) {
      delete this.words[word]
   }
   get (description) {
      this.words[description]
   }
   showAllWords (){
  const obj = Object.values (this.words)
   console.log('сортировка', obj);
   }
}

// Начало кода задания 4

class HardWordsDictionary extends Dictionary {
   constructor (name) {
      super (name)
   }
   add (word, description, isDifficult){
      this.words[word]={word:word, description: description, isDifficult: true}
   }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова')
console.log(hardWordsDictionary)
    
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.')
    
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.')
    
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.'); 
    
hardWordsDictionary.remove('неологизм');
    
hardWordsDictionary.showAllWords();
    
// дилетант - Тот, кто занимается наукой или искусством 
// без специальной подготовки, обладая только поверхностными знаниями.
// квант - Неделимая часть какой-либо величины в физике.