if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.evidenceOverview.helpers({
    checklist: function () {
      return Activities.find();
    }
  });

  Template.evidenceOverview.events({
    'click input[type=checkbox]': function (e,t) {
      // increment the counter when button is clicked
      var txt = $(e.target).parent().text().trim();
      var checked = $(e.target).prop('checked');
      console.log('*' + txt + "*" + checked + '*');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
