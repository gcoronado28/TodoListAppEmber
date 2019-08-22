import Controller from '@ember/controller';

export default Controller.extend({
	tasks: [
    { name: 'Client Meeting', description: 'lorem ipsum', date: '2019-03-27', completed: false },
    { name: 'Drink Water', description: 'lorem ipsum', date: '2019-02-17', completed: false },
    { name: 'Do that', description: 'lorem ipsum', date: '2019-04-12', completed: false },
    { name: 'Do this', description: 'lorem ipsum', date: '2019-04-22', completed: false }
  ]
});
