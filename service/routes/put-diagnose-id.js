function putDiagnoseId(app, mongoose) {
	return function(req, res) {
		var id = req.params.id;
        var changed = Date.now();

        mongoose.model('Diagnose').findOneAndUpdate({ _id:id }, {

                text:req.body.text,
                nodes:req.body.nodes,
                changed:changed
                
            }, {new: true}, function(err, diagnose) {
                    if (err) {
                        console.log('got an error');
                    }
                    else{
                        res.json(diagnose);
                    }
            }
        );
	};
}
module.exports = putDiagnoseId;