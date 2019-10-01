# Feedback

- [FilterNav.js:11](https://github.com/freddan88/k-play/blob/master/src/components/Flow/modules/FilterNav.js#L11) - It's easier to read and understand if you type out the full names of the variables instead of using "o" & "a"

- [Flow.js:8](https://github.com/freddan88/k-play/blob/master/src/components/Flow/Flow.js#L8) - Most of your files use space indentation but this one uses tabs. Maybe consider setting up prettier?

- [Search.css:4](https://github.com/freddan88/k-play/blob/master/src/components/SearchField/Search.css#L4) - Try to avoid using px for better responsiveness

- [Header2.js:31](https://github.com/freddan88/k-play/blob/master/src/components/Header/Header2.js#L31) - Remove unused code

- [Footer.js:7](https://github.com/freddan88/k-play/blob/master/src/components/Footer/Footer.js#L7) - Importing a css file like this will make all styles global. Instead use CSS-Modules https://create-react-app.dev/docs/adding-a-css-modules-stylesheet

- [Footer.js:12](https://github.com/freddan88/k-play/blob/master/src/components/Footer/Footer.js#L12) - Try to have classnames with better describing names.

- [List.js:59](https://github.com/freddan88/k-play/blob/master/src/components/SearchField/List.js#L59) - You should call `this.handleChange.bind(this)` in your constructor, in the eventlisteners you want to call `this.handleChange`. An alternative to binding would be to use arrow functions in class components.

- [List.js:27](https://github.com/freddan88/k-play/blob/master/src/components/SearchField/List.js#L27) - ALWAYS use this.setState() when modifying state

- [ShareBar.js:8](https://github.com/freddan88/k-play/blob/master/src/components/PlayPage/modules/ShareBar.js#L8) - Be consistent if you using english/swedish in alt-tags.

- [List.js:48](https://github.com/freddan88/k-play/blob/master/src/components/SearchField/List.js#L48) - This function could just be 
```js
this.setState(prevState => ({
  isExpanded: !prevState.isExpanded
}));
```

- [List.js:20](https://github.com/freddan88/k-play/blob/master/src/components/SearchField/List.js#L20) - It's considered bad practice to using selectors in React and can lead to unpredictable bugs

- [Category0.js#L6](https://github.com/freddan88/k-play/blob/master/src/components/Overlay/modules/FilterView_dropdowns/Category0.js#L6) - Be careful not to use swedish prop names

- [Images](https://github.com/freddan88/k-play/tree/master/src/Images) - Maybe it should be a god idea to separate the image folder in subfolders for example one folder to icons.

- [FilterView.js:2](https://github.com/freddan88/k-play/blob/master/src/components/Overlay/modules/FilterView.js#L2) - Category0 and Category1 looks like the same file. Consider renaming them if they are different to show the difference or delete 1 if they are equal

- [Flow.js:38](https://github.com/freddan88/k-play/blob/master/src/components/Flow/Flow.js#L38) - Consider always destructing props and state. Especially for props, makes it easier to see what values you have available in the render.

- [PagesTest](https://github.com/freddan88/k-play/tree/master/src/PagesTest) - File names with the end 'test' is a bit confusing.

- [SearchResults.js:7](https://github.com/freddan88/k-play/blob/master/src/components/Header/modules/SearchResults.js#L7) - Don't use inline styling.

- [SortView.js:25](https://github.com/freddan88/k-play/blob/master/src/components/Overlay/modules/SortView.js#L25) - The key should be on the `<li>` tag instead. The React.Fragment is useless here

- [MediaHeader.js:27](https://github.com/freddan88/k-play/blob/master/src/components/PlayPage/MediaHeader.js#27) - Use strict comparisons

- [FilterView.js:1](https://github.com/freddan88/k-play/blob/master/src/components/Overlay/modules/FilterView.js#L1) - useEffect is never used in file.
