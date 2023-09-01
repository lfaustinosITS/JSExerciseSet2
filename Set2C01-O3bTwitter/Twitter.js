function replaceWithStringAndLink(text, searchString) {
  const trimmedSearchString = searchString.trim()
  
  if (trimmedSearchString.length === 0){
    return text
  }
   
  const hashtag = `#${trimmedSearchString}`;
  const twitterSearchLink = `https://twitter.com/search?q=${encodeURIComponent(hashtag)}`;
  const safeSearchString = trimmedSearchString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const replacedText = text.replace(new RegExp(`\\b${safeSearchString}\\b`, 'gi'), `<a href="${twitterSearchLink}" target="_blank">${hashtag}</a>`);
  return replacedText;
}

const replaceButton = document.getElementById('replaceButton');
replaceButton.addEventListener('click', function () {
  const textInput = document.getElementById('textInput');
  const searchInput = document.getElementById('searchInput');
  const resultContainer = document.getElementById('resultContainer');

  const text = textInput.value;
  const searchString = searchInput.value;
  const replacedText = replaceWithStringAndLink(text, searchString);

  resultContainer.innerHTML = replacedText;
});
