import React from "react";
import "../../Styles/Admission.css";
import guidelines from "../../Images/Admission/guidelines.png";
import register from "../../Images/Admission/register.png";
import docs from "../../Images/Admission/docs.png";
import fee from "../../Images/Admission/feepay.png";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import JoinUs from "../../Components/JoinUs";
function Admission() {
	return (
		<div>
			<div className="admission-main">
				<div className="admission-title">Admission Process</div>
				<div className="rect"></div>
				<div className="content">
					<div className="section">
						<div className="head">
							<div className="adtext">General Guidelines</div>
							<div className="larrow arrow1">
								<div className="Atarget"></div>
								<div className="Aline"></div>
								<div className="Acenter"></div>
							</div>
						</div>{" "}
						<img className="adimg" src={guidelines}></img>
						<div className="adoverlay">
							<div className="overlay-text">
								1. Prospectus & admission form can be obtained from school office
								during school hours.<br></br> 2. For Provisional admission to class
								XI, a candidate must submit class IX Report Card along with a xerox
								of class X pre-board exam report card.<br></br> 3. There is no
								direct admission for classes X & XII. Admission can be given only in
								transfer case of parents or shifting of house with documental proof.{" "}
								<br></br>4. Schools strictly follow all the rules & regulations of
								RTE Act.
							</div>{" "}
						</div>
					</div>

					<div className="section rights">
						<div className="head rhead">
							<div className="rarrow arrow2">
								<div className="Acenter"></div>
								<div className="Aline"></div>
								<div className="Atarget"></div>
							</div>
							<div className="adtext">Registration</div>
						</div>{" "}
						<img className="adimg" src={register}></img>
						<div className="adoverlay roverlay">
							<div className="overlay-text">
								1.You can apply for registartion on the site itself.
								<br />
								2.Click on the hovering element of Intrested?/Join Us.
								<br />
								3.Fill the form correctly with all the information.
								<br />
								4.We will send you a mail on confirming the form submission for
								review.
								<br />
								5.You can also apply for registration offline.
							</div>{" "}
						</div>
					</div>

					<div className="section">
						<div className="head">
							<div className="adtext">Documents</div>
							<div className="larrow arrow1">
								<div className="Atarget"></div>
								<div className="Aline"></div>
								<div className="Acenter"></div>
							</div>
						</div>{" "}
						<img className="adimg" src={docs}></img>
						<div className="adoverlay">
							<div className="overlay-text">
								1. For class up to I, original birth certificate along with an
								attested photocopy of the same.
								<br />
								2. For class II and above, original T.C. countersigned by the
								competent authority and report card of the previous academic
								session. <br />
								3. 3 copies of passport size photograph. <br />
								4. Migration certificate for the student coming from other state.
							</div>{" "}
						</div>
					</div>
					<div className="section rights">
						<div className="head rhead">
							<div className="rarrow arrow2">
								<div className="Acenter"></div>
								<div className="Aline"></div>
								<div className="Atarget"></div>
							</div>
							<div className="adtext">Fees Payment</div>
						</div>{" "}
						<img className="adimg" src={fee}></img>
						<div className="adoverlay roverlay">
							<div className="overlay-text">
								1. Tuition fee and Boarding fee is payable in two equal installments
								in the month of April and October.
								<br />
								2. All payment should be either in Cash or by Demand Draft in favour
								of “Principal, Dundlod Girls School, Dundlod” <br />
								3. Fee once deposited will not be refunded under any circumstances.
								<br />
								4. Transfer Certificate is issued only after all the dues are
								settled.
							</div>{" "}
						</div>
					</div>
				</div>
			</div>
			<Navbar page="Admission" />
			<Footer />
			<JoinUs />
		</div>
	);
}

export default Admission;
