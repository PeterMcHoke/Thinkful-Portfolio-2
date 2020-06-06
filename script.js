$('.scrollLink').click(e => {
  e.preventDefault();


  // remove the last 2 characters because height is the string '00px'
  const stickyHeight = Number($('.sticky').css('height').slice(0, -2));
  const href = $(e.currentTarget).attr('href');
  // we need the offset because it will try to scroll the element to the top of the page, we actually want it to be after the sticky
  $.scrollTo(href, 800, {offset: -stickyHeight-20});

  // you can see other examples/options of the lib at:
  // http://demos.flesler.com/jquery/scrollTo/
});

$('#map-frame').on('load', () =.)
const iframe = $('#map-frame').contents();

$('.place-card',iframe).css("display","none");

e => {
  //do something
}


let arr = [1,2,3];

console.log(
  arr.map(x => 10*x);
)
