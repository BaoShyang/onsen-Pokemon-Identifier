window.fn = {};

window.fn.load = function(page, mytitle) {
  var navigator = document.getElementById('myNavigator');
  var menu = document.getElementById('menu');
  data = { data: { title: mytitle }, animation: 'slide' };
  navigator.pushPage(page, data).then(menu.close.bind(menu));
};

function searchPokemon() {
  var name = document.getElementById('pokemonname').value;
  var url = 'https://pokeapi.co/api/v2/pokemon/' + name;

  $.ajax(url)
    .done(function(data) {
      console.log(data);
      $('#pokemoninfo').html(
        'Name: ' +
          data.name +
          '<br> Height: ' +
          data.height +
          '<br> Weight: ' +
          data.weight
      );
      $('#pokemonimage').attr('src', data.sprites.front_default);
    })
    .fail(function() {
      $('#result').html(name + ' not found!');
    });
}

function clearInput() {
  document.getElementById('pokemonname').value = '';
}
