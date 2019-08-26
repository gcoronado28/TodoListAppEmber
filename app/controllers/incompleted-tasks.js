import Controller from '@ember/controller';

export default Controller.extend({
	clickedTask: null,
	actions: {
    showTaskPreview(task) {
      this.set('clickedTask', task);
    }
  },

	tasks: [
    { name: 'Client Meeting', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat aliquid debitis architecto autem facilis', date: '2019-03-27', completed: false },
    { name: 'Drink Water', description: 'Venim voluptates quia alias non atque delectus aut optio praesentium cupiditate, cum ea qui inventore', date: '2019-02-17', completed: false },
    { name: 'Do that', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat aliquid debitis architecto autem facilis', date: '2019-04-12', completed: false },
    { name: 'Do this', description: 'Venim voluptates quia alias non atque delectus aut optio praesentium cupiditate, cum ea qui inventore', date: '2019-04-22', completed: false }
  ]
});
