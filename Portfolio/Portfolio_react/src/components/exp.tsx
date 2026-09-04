const exp_loc = ['Remedage', 'Medical ART Center', 'Babcock University'];

const exp = {
    'Remedage' : {
        'role' : 'Founder CEO',
        'time' : [
            'Analysis of medical data to derive actionable insights, providing yearly summaries generating key business questions and plans, leading to a shiftin marketing strategies of clients worth around60% oftotal clients.',
            'Created analysis presetfor subsequent analysis reducing future analysis time duration by 80%.' ,
            'Assistance in medicalresearch aimed to propose and improve treatment among national based clinics by analyzing proceeding results from experiments and providing visual aids to help showcase results.',
            'Feature creation to improve client satisfaction using programming tools, creating a database to derive future insights, with a projected return rate of 40% following better interactions following treatments.'
        ],
        'des' : ''
    },
    'Medical ART Center' : {
        'role' : 'Data Analyst and Research Assistant',
        'time' : '2025 - 2026',
        'des' : ''
    }
}
function exp_act(){
    document.getElementById('exp_out')
    ;
    if (exp_loc)
        return(
            <>
            <p>Founder CEO of  </p>
            </>
        )


    if(exp_loc){
        return(
            <>
            <h3>Data Analyst and Research Assistant</h3>
            <h4>Mar 2025 - Jun 2026</h4>
            
            
            <p>Feature creation to improve client satisfaction using programming tools, creating a database to
            derive future insights, with a projected return rate of 40% following betterinteractions following
            treatments.</p>
            </>
        )
    }
    if (exp_loc)
        return(
            <>
                <h3>Student Council Member</h3>
                <p>Worked with fellow executives to propose the setting up a cybercafé to the SchoolAuthority,
                this was approved and the cybercafe was set up under my direction bringing solution and ease
                to the student populace.</p>
                <h3>Final’s Reasearch Group Leader</h3>
                <p>Led cross-functionalteams to achieve project goals on time.
                Implemented quality control measures for equipment's used during the experiment and ensured
                adherence to standards.</p>
            </>
        )
};


function exp_sec(){
    return(
        <>
            <div>
                <h2>Experince</h2>
                <div>
                    <ul>
                        {exp_loc.map(exp_loc => <button onClick={() => exp_act()}>{exp_loc}</button>)}
                    </ul>
                </div>
                <div id="exp_out">
                    
                </div>
            </div>
        </>
    )

};

export default exp_sec