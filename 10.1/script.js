console.log('10.1');

var m = {t:50,r:50,b:50,l:50},
    w = document.getElementById('canvas').clientWidth - m.l - m.r,
    h = document.getElementById('canvas').clientHeight - m.t - m.b;

var plot = d3.select('.canvas')
    .append('svg')
    .attr('width', w + m.l + m.r)
    .attr('height', h + m.t + m.b)
    .append('g').attr('class','plot')
    .attr('transform','translate('+ m.l+','+ m.t+')');

//Mapping specific functions
//Projection

//Geopath

d3.json('../data/world-50m.json',dataloaded);

function dataloaded(err, data){
    console.log(data); //This is a Topojson data
    console.log(topojson.feature(data,data.objects.countries)); //This is the converted GeoJSON data of countries
}