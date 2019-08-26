import Controller from '@ember/controller';

export default Controller.extend({
	clickedTask: null,
	actions: {
    showTaskPreview(task) {
      this.set('clickedTask', task);
    }
  },
 
	tasks: [
    { name: 'Completed Task', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat aliquid debitis architecto autem facilis iste', date: '2019-03-27', completed: true },
    { name: 'Tasking Water', description: 'Venim voluptates quia alias non atque delectus aut optio praesentium cupiditate, cum ea qui inventore.', date: '2019-02-17', completed: true },
    { name: 'Do that again', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat aliquid debitis architecto autem facilis iste', date: '2019-04-12', completed: true },
    { name: 'Do this once', description: 'Venim voluptates quia alias non atque delectus aut optio praesentium cupiditate, cum ea qui inventore', date: '2019-04-22', completed: true }
  ]
});
