fetch('./finalSprint.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(character => {
      console.log(getName(character));
      console.log(appear(character));
      console.log(ability(character));
    });
  })
  .catch(error => {
    console.error(error);
  });

    function getName(character) {
        return `Name: ${character.first} ${character.last}`;
    }

    function appear(character) {
        return `First Appearance: ${character.appearance}`;
    }

    function ability(character) {
        return `${character.ability} in ${character.abilityappearance}.`;
    }


fetch('./link.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(link => {
      console.log(blank(link));
      console.log(other(link));
    });
  })
  .catch(error => {
    console.error(error);
  });

  function blank(link) {
    return `${link.blank}`;
  }

  function other(link) {
    return `For more information, check the wiki at ${link.linkwiki} or the SNK website at ${link.linksnk}`;
  }