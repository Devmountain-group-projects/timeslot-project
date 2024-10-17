import dotenv from "dotenv";
dotenv.config();

export const test = async (req, res) => {
  console.log("TESTING");
  return res.send({
    message: "Test successful",
    success: true,
  });
};

export const update = async (req, res) => {
  const db = req.app.get("db");
  const { field, input } = req.body
  if (req.session.userId) {

    switch (field) {
        case 'name': {
            console.log(input)
            console.log(req.session.userId)
            db.user.update({
                name: input
            },
            { where: { user_id: req.session.userId } })
            return res.send({
                message: "Name updated",
                success: true,
            });
        }
        case 'email': {
            console.log(input)
            db.user.update({
                email: input
            },
            { where: { user_id: req.session.userId } })
            return res.send({
                message: "Email updated",
                success: true,
            });
        }
        case 'phone': {
            console.log(input)
            db.user.update({
                phone: input
            },
            { where: { user_id: req.session.userId } })
            return res.send({
                message: "Phone updated",
                success: true,
            });
        }
        case 'about': {
            console.log(input)
            console.log(req.session.businessId)
            db.business.update({
                description: input
            },
            { where: { business_id: req.session.businessId } })
            return res.send({
                message: "About updated",
                success: true,
            });
        }
        case 'businessName': {
            console.log(input)
            console.log(req.session.userId)
            db.business.update({
                business_name: input
            },
            { where: { business_id: req.session.businessId } })
            return res.send({
                message: "Business Name updated",
                success: true,
            });
        }
        case 'address1': {
            console.log(input)
            db.business.update({
                address_line1: input
            },
            { where: { business_id: req.session.businessId } })
            return res.send({
                message: "Address Line 1 updated",
                success: true,
            });
        }
        case 'address2': {
            console.log(input)
            db.business.update({
                address_line2: input
            },
            { where: { business_id: req.session.businessId } })
            return res.send({
                message: "Address Line 2 updated",
                success: true,
            });
        }
        case 'city': {
            console.log(input)
            db.business.update({
                city: input
            },
            { where: { business_id: req.session.businessId } })
            return res.send({
                message: "City updated",
                success: true,
            });
        }
        case 'state': {
            console.log(input)
            console.log(req.session.userId)
            db.business.update({
                state: input
            },
            { where: { business_id: req.session.businessId } })
            return res.send({
                message: "State updated",
                success: true,
            });
        }
        case 'zip': {
            console.log(input)
            db.business.update({
                zip_code: input
            },
            { where: { business_id: req.session.businessId } })
            return res.send({
                message: "Zip updated",
                success: true,
            });
        }
        case 'businessPhone': {
            console.log(input)
            db.business.update({
                phone: input
            },
            { where: { business_id: req.session.businessId } })
            return res.send({
                message: "Business Phone updated",
                success: true,
            });
        }
        case 'website': {
            console.log(input)
            db.business.update({
                website: input
            },
            { where: { business_id: req.session.businessId } })
            return res.send({
                message: "Website updated",
                success: true,
            });
        }
        default: {
            return res.send({
                message: "Hit Default",
                success: false,
            });
        }
    }
  } else {
    return res.send({
        message: "User not signed in",
        success: false
    })
  }
};




// get updated info
// formated like 
// { field: "THING TO CHANGE", input: "NEW THING" }
// Switch stament based off of field
// db.table.update({ field: input }, { where: { id: req.session.userId } })
//
//

