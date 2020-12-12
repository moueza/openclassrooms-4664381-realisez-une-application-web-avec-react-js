"use strict";
// Ãƒâ‚¬ l'ancienne
//var props;
//props={firstName:"",lastName:""};
class A {
  /**for props to exist */
  f2() {
    this.props.firstName = "Peter";
    this.props.lastName = "MOUEZA";

    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    const onClick = this.props.onClick;

    // Avec une dÃƒÂ©structuration basÃƒÂ©e sur les noms
    const { firstName2, lastName2, onClick2 } = this.props;

    // Ãƒâ‚¬ l'ancienne
    var fullName = "";
    const names3 = fullName.split(" ");
    const firstName3 = names3[0];
    const lastName3 = names3[1];

    // Avec une dÃƒÂ©structuration basÃƒÂ©e sur les positions
    const [firstName4, lastName4] = fullName.split(" ");
  }
}
