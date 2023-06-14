function replaceWithStringAndLink(text, searchString) {
  const hashtag = `#${searchString}`;
  const twitterSearchLink = `https://twitter.com/search?q=${encodeURIComponent(hashtag)}`;
  const replacedText = text.replace(new RegExp(searchString, 'gi'), `${hashtag} (${twitterSearchLink})`);
  return replacedText;
}
  
  
const text = "String: yolo ... should never use #yolo for any reason...";
const searchString = "yolo";
const replacedText = replaceWithStringAndLink(text, searchString);
console.log(replacedText);
