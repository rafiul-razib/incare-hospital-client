import React from 'react';
import img22 from '../../images/About/national-cancer-institute-KrsoedfRAf4-unsplash.jpg'

const SuccessStory = () => {
    return (
        <div className="container">
            
            <div class="card" style={{"width": "100%"}}>
            <img src={img22} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h2 className="card-title">Milestone in Kidney Transplant</h2>
                <p class="card-text">TEN YEARS ago in this journal’s Landmark Article series of reproduced historical publications, the remarkable impact was described1 of the 1956 report in JAMA by Merrill et al2 of an identical twin renal transplantation. The operation was performed in December 1954, by Joseph E. Murray (Nobel Laureate, 1990) and his associates at the Peter Bent Brigham Hospital, Boston, Mass. By avoiding problems with rejection, such cases symbolized what might some-day be accomplished if the immunologic reaction could be controlled. Then, on January 24, 1959, the barrier posed by genetic nonidentity was breached for the kidneys with a successful fraternal twin transplantation3 by the same team.</p>
            </div>
            </div>
        </div>
    );
};

export default SuccessStory;