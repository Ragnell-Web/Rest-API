// $('.page-scroll').on('click', function(e){
	
// 	// ambil isi href
// 	var tujuan = $(this).attr('href');
// 	// tangkap elemen yang bersangkutan
// 	var elemenTujuan = $(tujuan);

// 	// pindahkan scroll
// 	$('body').animate({
// 		scrollTop: elemenTujuan.offset().top - 50
// 	},1000);

// 	e.preventDefault();

// });
// 

// parallax
// 
// About
// 
$(window).on('load', function(event) {
	
	$('.kiri').addClass('muncul');
	$('.kanan').addClass('muncul');
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	// jumbotron

	$('.jumbotron img').css({
		'transform' : 'translate(0, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0, '+ wScroll/1.2 +'%)'
	});

	// portfolio
	 
	if (wScroll > $('.portfolio').offset().top - 200) {
		$('.portfolio .thumbnail').each(function() {
			setTimeout(function() {
			  console.log('ok');
			}, 2000);
		});
	}

});

/*Social Media*/

const imgYoutube = document.querySelector(`#img-youtube`);
const h5Youtube = document.querySelector(`.title-youtube`);
const pYoutube = document.querySelector(`.subscriber`);
const iframe = document.querySelector(`iframe`)

/*Youtube*/
function getYoutube(url) { 
	return fetch(url, { method: `get` })
		.then(resp => resp.json())
		.then(resp => resp.items);
}

async function getYoutubeData() {
	const items = await getYoutube(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&key=AIzaSyA8noQx_fhVpkSn1B86w6Lc8qfX9FcqlqU&id=UC0rzsIrAxF4kCsALP6J2EsA`);
	const img = items.map(item => item.snippet.thumbnails.medium.url).join(``);
	const title = items.map(item => item.snippet.title).join(``);
	const subscriber = items.map(item => item.statistics.subscriberCount).join(``);
	imgYoutube.src = img;
	h5Youtube.innerHTML = title;
	pYoutube.innerHTML = `${subscriber} Subcribers`;
};

async function getYoutubeVideo() {
	const items = await getYoutube(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyA8noQx_fhVpkSn1B86w6Lc8qfX9FcqlqU&part=snippet&channelId=UC0rzsIrAxF4kCsALP6J2EsA&maxResults=1&order=date`);
	const lastVideo = items.map(item => item.id.videoId).join(``);
	iframe.src = `https://www.youtube.com/embed/${lastVideo}?rel=0`;
};


getYoutubeData();
getYoutubeVideo();
/*Akhir Youtube*/

/*Instagram*/
const h5Username = document.querySelector(`.username-ig`);
const colThumbnail = document.querySelector(`.thumbnail-ig-photo`);

function getFacebook(url) {
	return fetch(url, { method: `get` })
		.then(resp => resp.json())
		.then(resp => resp.data)
}

async function getFacebookData() {
	const datas = await getFacebook(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,thumbnail_url,profile_picture&access_token=IGQVJVeUNrQUpCNzV5ZA0NSeGx6SVUtQzkxeVUxajVvU1hreFp1bGhyQjhIQWJjNHREcEppWUVaLWJ4VVNNdnJYbXJ0LVNJdEtmXzFWUkxXc0wzUzRxSXBleUdzN2Y4VTNPN2ZAMZATZAFU3p0VlRudG9sbgZDZD`);
	datas.forEach(data => {
		h5Username.innerHTML = `@${data.username}`
	});
	const thumbnailIg = datas.map(data => {
		return /*html*/`
							<div class="ig-thumbnail">
								<img src="${data.thumbnail_url}">
							</div>
		`
	}).join(``);
	colThumbnail.innerHTML = thumbnailIg;
}

getFacebookData()

/*Akhir Instagram*/
/*Akhir Social Media*/

