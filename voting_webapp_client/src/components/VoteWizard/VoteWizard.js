import MultiStep from 'react-multistep'

const VoteWizard = () => {

    const steps = [
        { component: <StepOne /> },
        { component: <StepTwo /> },
        { component: <StepThree /> },
        { component: <StepFour /> }
    ];

    const prevStyle = {'background': '#33c3f0', 'border-width': '2px'}
    const nextStyle = {'background': '#33c3f0',  'border-width': '2px'}

    return(
        <>
            <div className='container'>
                <MultiStep steps={steps} prevStyle={prevStyle} nextStyle={nextStyle}/>
                <div className='container app-footer'>
                    <h6>Press 'Enter' or click on progress bar for next step.</h6>
                    Code is on{' '}
                </div>
            </div>
        </>
    )
};

export default VoteWizard;