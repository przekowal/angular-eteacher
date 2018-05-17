import {WordPair} from '../shared/word-pair.model';

export class LessonService {
  private words: WordPair[] = [
    new WordPair('rower', 'bike')
  ];

  addWords(wordPair: WordPair) {
    this.words.push(wordPair);
  }

  getWords() {
    return this.words.slice();
  }
}
