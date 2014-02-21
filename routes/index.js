
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: '' });
};

exports.contact = function(req, res){
  res.render('contact', { title: 'Contact Us' });
};

exports.myStory = function(req, res){
  res.render('story', { title: 'My Story' });
};

exports.instructionalVideos = function(req, res){
  res.render('instructionalVideos', { title: 'Instructional Videos', id: 'instructional-videos' });
};
