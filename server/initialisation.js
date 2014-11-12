if(Activities.find().count() < 1) {
    Activities.insert({
        //applicationId: appId,
        title: 'Drivers Licence and Passport',
        description: 'Clear copies of both. Licence both sides',
        type: 'evidence',
        completed: false
    })

    Activities.insert({
        //applicationId: appId,
        title: 'Work Income',
        description: 'Last 2 payslips and group certificate (payment summary) from last financial year',
        type: 'evidence',
        completed: false
    })

    Activities.insert({
        //applicationId: appId,
        title: 'Self Employed Income',
        description: 'Personal tax returns and assessment notices from last 2 financial years.',
        type: 'evidence',
        completed: false
    })
}