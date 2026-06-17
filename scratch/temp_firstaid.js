

; // e.g. RICE = Rest, Ice, Compress, Elevate
  steps: FirstAidStep[];
  doNots: string[];
  whenToSeekHelp: string[];
  estimatedRecovery?: string;
}



const firstAidCategories = [
  {
    id: "fractures",
    slug: "fractures",
    name: "Fractures",
    icon: "Bone",
    color: "#FF4D4D",
    description: "Bone breaks or cracks caused by trauma, falls, or high-impact force. Requires stabilization.",
    formula: "D.R.I",
    formulaExpanded: ["Don't Move", "Rest", "Immobilise"],
    types: [
      {
        id: "collarbone",
        name: "Collarbone Fracture",
        bodyPart: "Shoulder / Clavicle",
        severity: "moderate",
        overview: "A break in the clavicle bone, typically caused by a fall onto the shoulder or outstretched hand.",
        formula: {
          acronym: "D.R.I",
          steps: ["Do not move the shoulder or arm.", "Rest the patient in a sitting position.", "Immobilise using a sling."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Support the Injured Arm",
            description: "Have the patient support their injured arm with their other hand, or gently hold it against their chest to prevent movement.",
            imagePrompt: "Supporting injured arm close to chest",
            warning: "Avoid shifting or lifting the arm aggressively, as this causes bone displacement."
          },
          {
            stepNumber: 2,
            title: "Apply a Triangular Sling",
            description: "Fold a triangular bandage. Slip it under the arm, bring it over the opposite shoulder, and tie it securely behind the neck.",
            imagePrompt: "Triangular arm sling applied to shoulder"
          },
          {
            stepNumber: 3,
            title: "Secure the Arm to the Chest",
            description: "Wrap a broad fold bandage or scarf around the chest and sling to keep the arm close to the body, preventing swing.",
            imagePrompt: "Broad bandage securing arm sling to chest"
          },
          {
            stepNumber: 4,
            title: "Apply Ice or Cold Pack",
            description: "Gently apply an ice pack wrapped in a thin towel to the collarbone area for 10-15 minutes to reduce pain and swelling.",
            imagePrompt: "Ice pack wrapped in towel applied to clavicle"
          },
          {
            stepNumber: 5,
            title: "Monitor for Shock",
            description: "Keep the patient warm and calm. Check for signs of shock: pale skin, cold sweat, rapid shallow breathing.",
            imagePrompt: "Patient sitting wrapped in blanket"
          }
        ],
        doNots: [
          "Do not try to force or snap the collarbone back into alignment.",
          "Do not allow the patient to drive or raise their arm above shoulder height.",
          "Do not give them food or drink in case emergency surgery is required."
        ],
        whenToSeekHelp: [
          "Bone is visible or breaking through the skin (Open Fracture).",
          "There is severe numbness, tingling, or coldness in the hand/arm.",
          "The patient experiences shortness of breath or chest pain."
        ],
        estimatedRecovery: "6 - 8 weeks"
      },
      {
        id: "wrist",
        name: "Wrist Fracture",
        bodyPart: "Wrist / Hand",
        severity: "moderate",
        overview: "A fracture in the radius or ulna near the wrist joint, frequently resulting from falling forward onto an outstretched hand.",
        formula: {
          acronym: "D.R.I",
          steps: ["Do not rotate or bend the wrist.", "Rest the arm on a soft surface.", "Immobilise with a rigid splint."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Remove Jewelry",
            description: "Immediately remove rings, watches, or bracelets from the injured hand before swelling cuts off circulation.",
            imagePrompt: "Removing rings from swollen finger",
            warning: "Swelling can develop rapidly. If rings cannot be removed, seek immediate medical aid."
          },
          {
            stepNumber: 2,
            title: "Splint the Wrist",
            description: "Place a padded, rigid item (like a rolled magazine or wooden board) along the forearm and hand. Secure it with bandages.",
            imagePrompt: "Rigid splint secured along wrist and forearm"
          },
          {
            stepNumber: 3,
            title: "Elevate and Support",
            description: "Elevate the hand slightly above heart level using a cushion or arm sling to minimize fluid pooling and swelling.",
            imagePrompt: "Wrist splint elevated on cushions"
          },
          {
            stepNumber: 4,
            title: "Apply Cold Compress",
            description: "Wrap an ice pack in a cloth and place it over the splinted area. Never apply bare ice directly to the skin.",
            imagePrompt: "Applying ice pack over splinted wrist"
          },
          {
            stepNumber: 5,
            title: "Seek Professional Care",
            description: "Go to an urgent care or emergency department immediately for X-ray verification and professional casting.",
            imagePrompt: "Medical clinic entrance icon"
          }
        ],
        doNots: [
          "Do not attempt to pull or straighten a deformed wrist.",
          "Do not wrap bandages so tightly that fingers turn blue or lose sensation."
        ],
        whenToSeekHelp: [
          "Fingers are pale, cold, or blue.",
          "The bone is protruding or breaking through the skin.",
          "Pain is unmanageable even with elevation and splinting."
        ],
        estimatedRecovery: "6 - 10 weeks"
      },
      {
        id: "elbow",
        name: "Elbow Fracture",
        bodyPart: "Elbow / Joint",
        severity: "moderate",
        overview: "A break in one of the three bones meeting at the elbow joint. Highly critical due to potential nerve and blood vessel damage.",
        formula: {
          acronym: "D.R.I",
          steps: ["Do not bend or straighten the elbow.", "Rest in a comfortable position.", "Immobilise the elbow in its current position."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Keep in the Found Position",
            description: "Do not attempt to bend or straighten the elbow. Immobilize it exactly as it was found.",
            imagePrompt: "Elbow bent at an angle, supported gently",
            warning: "Forcing the elbow to bend or straighten can sever major arteries or nerves passing through the joint."
          },
          {
            stepNumber: 2,
            title: "Support with a Splint or Sling",
            description: "If the elbow is bent, apply a sling to support the arm. If the elbow is straight, splint the entire arm straight.",
            imagePrompt: "Arm splinted straight or supported in sling"
          },
          {
            stepNumber: 3,
            title: "Check Circulation",
            description: "Pinch the patient's fingernail on the injured side for 2 seconds. The color should return from white to pink in under 2 seconds.",
            imagePrompt: "Capillary refill test on fingernail"
          },
          {
            stepNumber: 4,
            title: "Apply Ice Gently",
            description: "Apply a cold pack wrapped in a cloth to the outer sides of the elbow to mitigate swelling.",
            imagePrompt: "Ice pack on elbow joint"
          },
          {
            stepNumber: 5,
            title: "Get X-Rays Immediately",
            description: "Transport the patient immediately to the nearest emergency room. Surgical intervention is common.",
            imagePrompt: "Hospital X-ray machine symbol"
          }
        ],
        doNots: [
          "Do not try to adjust or manipulate the elbow alignment.",
          "Do not wrap bandages directly over the tip of the elbow."
        ],
        whenToSeekHelp: [
          "The hand or arm below the elbow is cold, pale, or pulse-less.",
          "There is loss of feeling in the hand or fingers.",
          "Visible joint deformity or open wound."
        ],
        estimatedRecovery: "8 - 12 weeks"
      },
      {
        id: "ankle",
        name: "Ankle Fracture",
        bodyPart: "Ankle / Foot",
        severity: "moderate",
        overview: "A break in the tibia, fibula, or talus, causing severe weight-bearing instability, swelling, and deformity.",
        formula: {
          acronym: "D.R.I",
          steps: ["Do not bear weight on the foot.", "Rest the ankle on a soft elevation.", "Immobilise using a blanket or pillow splint."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Keep Weight Off",
            description: "Instruct the patient not to stand or walk. Help them sit or lie down immediately.",
            imagePrompt: "Patient sitting with leg resting on chair"
          },
          {
            stepNumber: 2,
            title: "Construct a Pillow Splint",
            description: "Place a soft pillow under the foot and ankle. Wrap the pillow around the ankle and pin or tie it securely.",
            imagePrompt: "Foot wrapped in a pillow tied with bandages",
            warning: "Ensure ties are firm but do not constrict blood flow to the toes."
          },
          {
            stepNumber: 3,
            title: "Elevate the Limb",
            description: "Raise the splinted ankle above the heart level using cushions to reduce vascular pooling.",
            imagePrompt: "Pillow-splinted foot elevated on cushions"
          },
          {
            stepNumber: 4,
            title: "Check Toe Sensation",
            description: "Tap the toes and ask if they feel it. Check that the toes remain warm and normal in color.",
            imagePrompt: "Checking toes color and temperature"
          },
          {
            stepNumber: 5,
            title: "Seek Emergency Orthopedic Care",
            description: "Arrange safe transport to a clinic. Avoid letting the foot hang down during transport.",
            imagePrompt: "Person being transported in car or ambulance"
          }
        ],
        doNots: [
          "Do not attempt to walk on the broken ankle.",
          "Do not remove boots or shoes if doing so causes extreme pain or movement."
        ],
        whenToSeekHelp: [
          "The ankle is severely deformed or dislocated.",
          "Bones are protruding through the skin.",
          "The foot is cold, pale, or completely numb."
        ],
        estimatedRecovery: "6 - 12 weeks"
      },
      {
        id: "finger-toe",
        name: "Finger or Toe Fracture",
        bodyPart: "Fingers / Toes",
        severity: "mild",
        overview: "Cracks or breaks in the phalanges, usually caused by crushing incidents or stubbing injuries.",
        formula: {
          acronym: "D.R.I",
          steps: ["Do not bend the digit.", "Rest the hand or foot.", "Immobilise by buddy taping to the adjacent digit."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Clean Open Cuts",
            description: "If there's an open cut, gently wash it with water and apply a sterile dressing before splinting.",
            imagePrompt: "Washing finger wound under water"
          },
          {
            stepNumber: 2,
            title: "Apply Buddy Taping",
            description: "Place a small strip of gauze between the broken digit and the neighboring healthy digit. Tape them together.",
            imagePrompt: "Two fingers taped together with gauze separator",
            warning: "Never tape the broken finger or toe directly skin-to-skin, as it can cause sweat buildup and skin breakdown."
          },
          {
            stepNumber: 3,
            title: "Apply Ice",
            description: "Hold a small ice pack wrapped in a damp cloth to the digit for 10 minutes to soothe throbbing.",
            imagePrompt: "Ice cube wrapped in cloth against finger"
          },
          {
            stepNumber: 4,
            title: "Elevate Hand/Foot",
            description: "Keep the hand or foot raised. Swelling in digits can cause intense throbbing pain.",
            imagePrompt: "Elevated hand resting on a pillow"
          },
          {
            stepNumber: 5,
            title: "Medical Checkup",
            description: "Seek an X-ray to ensure the bone heals straight and joint surfaces are not damaged.",
            imagePrompt: "Doctor inspecting hand"
          }
        ],
        doNots: [
          "Do not tape over a joint if it can be avoided.",
          "Do not attempt to pull a crooked finger straight."
        ],
        whenToSeekHelp: [
          "The finger or toe looks severely rotated or crooked.",
          "There is numbness or a cold, bluish color in the nail bed.",
          "Blood is pooling heavily under the nail (subungual hematoma) causing severe pressure."
        ],
        estimatedRecovery: "3 - 5 weeks"
      },
      {
        id: "rib",
        name: "Rib Fracture",
        bodyPart: "Chest / Torso",
        severity: "moderate",
        overview: "A break in one or more chest ribs, typically caused by direct impact. Danger includes puncturing the lung.",
        formula: {
          acronym: "D.R.I",
          steps: ["Do not compress the chest.", "Rest in an upright, leaning position.", "Immobilise by supporting with a pillow."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Encourage Upright Rest",
            description: "Have the patient sit down, leaning slightly toward the injured side to optimize lung expansion.",
            imagePrompt: "Patient sitting upright leaning sideways"
          },
          {
            stepNumber: 2,
            title: "Hold a Pillow for Support",
            description: "Instruct the patient to hold a soft pillow against the injured side of the chest when coughing or deep breathing.",
            imagePrompt: "Holding pillow tightly against chest",
            warning: "Do NOT bind or wrap bandages tightly around the chest. This prevents lungs from expanding and causes pneumonia."
          },
          {
            stepNumber: 3,
            title: "Promote Gentle Deep Breaths",
            description: "Have the patient take regular, slow deep breaths to keep the lungs clear, even if it hurts slightly.",
            imagePrompt: "Patient breathing in slowly"
          },
          {
            stepNumber: 4,
            title: "Ice the Pain Site",
            description: "Apply a cold pack wrapped in a towel for 15 minutes every 2 hours to calm local intercostal inflammation.",
            imagePrompt: "Ice pack on chest ribs"
          },
          {
            stepNumber: 5,
            title: "Seek Immediate Evaluation",
            description: "Take the patient to an emergency department to rule out internal bleeding or a collapsed lung.",
            imagePrompt: "Stethoscope over chest icon"
          }
        ],
        doNots: [
          "Do not strap the chest with tape or tight compression wraps.",
          "Do not force the patient to lie down flat."
        ],
        whenToSeekHelp: [
          "The patient is coughing up bright red, frothy blood.",
          "Extreme difficulty breathing or a feeling of suffocation.",
          "The chest wall moves inward during breathing instead of outward (Flail Chest)."
        ],
        estimatedRecovery: "4 - 6 weeks"
      },
      {
        id: "leg",
        name: "Leg Fracture (Femur)",
        bodyPart: "Thigh / Leg",
        severity: "severe",
        overview: "A fracture in the femur (thigh bone), which is a major medical emergency due to high risk of massive internal bleeding.",
        formula: {
          acronym: "D.R.I",
          steps: ["Do not attempt to move the patient.", "Rest completely flat on a hard surface.", "Immobilise by securing the injured leg to the uninjured leg."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Call Emergency Services (999)",
            description: "Immediately call EMS. A femur fracture is a major trauma that can cause severe shock.",
            imagePrompt: "Calling emergency services on smartphone",
            warning: "Massive blood loss can occur inside the thigh. Do not let the patient sit up or move."
          },
          {
            stepNumber: 2,
            title: "Keep the Patient Still",
            description: "Instruct the patient to remain completely flat. Comfort them and keep them calm.",
            imagePrompt: "Patient lying flat on their back"
          },
          {
            stepNumber: 3,
            title: "Treat for Shock",
            description: "Cover the patient with a warm blanket. Do not raise their legs, as this may shift the fractured thigh.",
            imagePrompt: "Covering lying patient with thermal blanket"
          },
          {
            stepNumber: 4,
            title: "Immobilize Legs Together",
            description: "Gently place padding (like blankets) between the knees and ankles. Tie the legs together with broad bandages.",
            imagePrompt: "Legs bound together with padding between knees"
          },
          {
            stepNumber: 5,
            title: "Monitor Vital Signs",
            description: "Check the patient's breathing, pulse, and consciousness level continuously until paramedics arrive.",
            imagePrompt: "Checking pulse on wrist"
          }
        ],
        doNots: [
          "Do not move the patient unless there is immediate environmental danger.",
          "Do not try to align or pull the leg straight.",
          "Do not give any food or liquids."
        ],
        whenToSeekHelp: [
          "All femur fractures are emergency events. Always call 999 immediately."
        ],
        estimatedRecovery: "3 - 6 months"
      },
      {
        id: "spine",
        name: "Spinal Fracture",
        bodyPart: "Back / Spine",
        severity: "severe",
        overview: "A break in one or more vertebrae. Extreme caution must be taken to prevent permanent spinal cord injury and paralysis.",
        formula: {
          acronym: "D.R.I",
          steps: ["Do not allow any movement of head or neck.", "Rest flat exactly as found.", "Immobilise by holding the head manually."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Call 999 and Do Not Move",
            description: "Immediately activate emergency services. Instruct the patient not to move a muscle, especially the head and neck.",
            imagePrompt: "Emergency ambulance dispatch icon",
            warning: "Even minor movement can sever or compress the spinal cord, causing permanent paralysis."
          },
          {
            stepNumber: 2,
            title: "Manually Stabilize the Head",
            description: "Kneel behind the patient's head. Place your hands on both sides of their head to keep it aligned and stable.",
            imagePrompt: "Hands holding head of lying patient still"
          },
          {
            stepNumber: 3,
            title: "Provide Reassurance",
            description: "Talk to the patient calmly, telling them not to nod or shake their head in response. Tell them help is on the way.",
            imagePrompt: "Speaking to patient lying down"
          },
          {
            stepNumber: 4,
            title: "Prevent Hypothermia",
            description: "Tuck a blanket around the sides of their body, avoiding moving the torso, to keep them warm.",
            imagePrompt: "Blanket tucked around stable patient"
          },
          {
            stepNumber: 5,
            title: "Prepare to Log Roll (Only If Vomiting)",
            description: "If the patient is choking or vomiting, coordinate with multiple helpers to roll the entire body as a single unit.",
            imagePrompt: "Multiple people log rolling a patient"
          }
        ],
        doNots: [
          "Do not move the patient unless their life is in immediate danger (e.g., fire).",
          "Do not put a pillow under the patient's head.",
          "Do not allow the patient to sit up or rotate their neck."
        ],
        whenToSeekHelp: [
          "Spinal fractures are critical emergencies. Call emergency services immediately."
        ],
        estimatedRecovery: "3 - 6 months"
      }
    ]
  },
  {
    id: "sprains-strains",
    slug: "sprains-strains",
    name: "Sprains & Strains",
    icon: "Activity",
    color: "#FFB830",
    description: "Ligament tears (sprains) or muscle/tendon tears (strains) resulting in acute pain, swelling, and bruising.",
    formula: "R.I.C.E",
    formulaExpanded: ["Rest", "Ice", "Compress", "Elevate"],
    types: [
      {
        id: "ankle-sprain",
        name: "Ankle Sprain",
        bodyPart: "Ankle / Foot",
        severity: "mild",
        overview: "Stretch or tear of the ligaments supporting the ankle joint, typically caused by rolling the foot inward.",
        formula: {
          acronym: "R.I.C.E",
          steps: ["Avoid weight-bearing activity.", "Apply ice packs for 15 minutes.", "Wrap with an elastic bandage.", "Raise the ankle above heart level."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Rest the Joint",
            description: "Cease all physical activity immediately. Sit down and avoid putting any weight on the injured foot.",
            imagePrompt: "Resting foot elevated on stool"
          },
          {
            stepNumber: 2,
            title: "Apply Ice Pack",
            description: "Place an ice pack wrapped in a thin towel on the outer ankle. Apply for 15-20 minutes every 2 hours.",
            imagePrompt: "Ice pack applied to outer ankle",
            warning: "Never apply ice directly to skin to avoid frostbite."
          },
          {
            stepNumber: 3,
            title: "Apply Compression Wrap",
            description: "Wrap an elastic compression bandage (ACE wrap) from the toes up to mid-calf. Wrap it snugly but not too tightly.",
            imagePrompt: "Elastic bandage wrapped in figure-eight on ankle"
          },
          {
            stepNumber: 4,
            title: "Elevate the Ankle",
            description: "Lie down and elevate the ankle on pillows so it is higher than the level of your heart to encourage lymphatic drainage.",
            imagePrompt: "Foot resting high on stacked pillows"
          },
          {
            stepNumber: 5,
            title: "Reassess Pain",
            description: "Monitor swelling and color. If the patient cannot walk 4 steps or pain is extreme, consult a physician.",
            imagePrompt: "Inspecting ankle joint"
          }
        ],
        doNots: [
          "Do not walk or run on a freshly sprained ankle.",
          "Do not apply heat (hot baths, heating pads) for the first 48 hours.",
          "Do not wrap the bandage so tight that the foot becomes cold or numb."
        ],
        whenToSeekHelp: [
          "Inability to bear weight at all.",
          "Severe bone tenderness directly on the bony bumps of the ankle.",
          "Extreme numbness or tingling in the foot."
        ],
        estimatedRecovery: "2 - 6 weeks"
      },
      {
        id: "wrist-sprain",
        name: "Wrist Sprain",
        bodyPart: "Wrist / Hand",
        severity: "mild",
        overview: "An injury to the ligaments in the wrist joint, common after putting hands out to break a fall.",
        formula: {
          acronym: "R.I.C.E",
          steps: ["Rest the hand and wrist.", "Ice the wrist area.", "Compress with a snug wrap.", "Elevate the hand."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Stop Using the Hand",
            description: "Immobilize the hand. Avoid gripping, lifting, or typing.",
            imagePrompt: "Resting wrist on flat cushion"
          },
          {
            stepNumber: 2,
            title: "Apply Ice",
            description: "Apply a cold pack wrapped in cloth to the wrist for 15 minutes to control internal capillary bleeding.",
            imagePrompt: "Ice pack on top of wrist"
          },
          {
            stepNumber: 3,
            title: "Wrap Snugly",
            description: "Wrap an elastic bandage around the wrist, beginning at the hand and moving up the arm. Leave fingers free.",
            imagePrompt: "Wrist being wrapped in elastic bandage"
          },
          {
            stepNumber: 4,
            title: "Keep Elevated",
            description: "Support the arm in a high position, or rest it on a cushion. Keeping it high reduces throbbing.",
            imagePrompt: "Arm elevated on chest"
          },
          {
            stepNumber: 5,
            title: "Seek Assessment",
            description: "If swelling is severe, or pain is localized to a single bone, get an X-ray to rule out scaphoid fracture.",
            imagePrompt: "Wrist X-ray graphic representation"
          }
        ],
        doNots: [
          "Do not use the wrist to lift items.",
          "Do not massage the area aggressively, as this increases local swelling."
        ],
        whenToSeekHelp: [
          "The wrist joint looks deformed.",
          "Pain is located specifically on the thumb side of the wrist (scaphoid bone risk).",
          "Loss of finger movement or sensation."
        ],
        estimatedRecovery: "1 - 4 weeks"
      },
      {
        id: "knee-sprain",
        name: "Knee Sprain",
        bodyPart: "Knee / Leg",
        severity: "moderate",
        overview: "Tear or stretch of knee ligaments (ACL, MCL, LCL, PCL) due to sudden twisting, pivoting, or impact.",
        formula: {
          acronym: "R.I.C.E",
          steps: ["Rest the knee immediately.", "Ice to decrease joint inflammation.", "Compress with a knee sleeve/wrap.", "Elevate the leg."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Stop Weight-Bearing",
            description: "Do not try to walk. Sit or lie down and keep the knee slightly bent and supported.",
            imagePrompt: "Patient sitting supporting knee with rolled towel underneath"
          },
          {
            stepNumber: 2,
            title: "Apply Ice Pack",
            description: "Apply ice wrapped in a towel to the front and sides of the knee for 20 minutes.",
            imagePrompt: "Ice pack secured on knee joint"
          },
          {
            stepNumber: 3,
            title: "Wrap the Knee",
            description: "Apply an elastic bandage around the knee. Start below the joint, wrap in overlapping spirals, and end above the joint.",
            imagePrompt: "Snug bandage wrap around knee"
          },
          {
            stepNumber: 4,
            title: "Elevate Leg",
            description: "Prop the leg up on cushions, ensuring the knee is elevated higher than the hip.",
            imagePrompt: "Leg elevated on pillows with knee support"
          },
          {
            stepNumber: 5,
            title: "Use Supportive Aids",
            description: "If moving is necessary, use crutches or support to prevent knee buckling.",
            imagePrompt: "Crutches icon"
          }
        ],
        doNots: [
          "Do not twist or pivot on the injured leg.",
          "Do not force the knee to bend completely or straighten completely."
        ],
        whenToSeekHelp: [
          "You heard a loud 'pop' at the time of injury.",
          "The knee feels highly unstable or locks in one position.",
          "Severe swelling occurs within 1-2 hours."
        ],
        estimatedRecovery: "4 - 12 weeks"
      },
      {
        id: "muscle-strain",
        name: "Muscle Strain (Hamstring/Calf/Back)",
        bodyPart: "Muscles / Back / Leg",
        severity: "mild",
        overview: "Overstretching or tearing of muscle fibers or tendons, often from heavy lifting or sudden sprinting.",
        formula: {
          acronym: "R.I.C.E",
          steps: ["Rest the strained muscle.", "Ice the muscle belly.", "Compress if in limb.", "Elevate the muscle above heart."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Rest the Muscle",
            description: "Stop the activity that caused the strain. Avoid stretching the muscle, as this tears fibers further.",
            imagePrompt: "Relaxing muscle on a flat mat",
            warning: "Stretching a freshly strained muscle can worsen the micro-tears and prolong recovery."
          },
          {
            stepNumber: 2,
            title: "Ice the Area",
            description: "Apply cold pack wrapped in a towel for 15-20 minutes to constrict damaged capillaries.",
            imagePrompt: "Ice pack on calf or hamstring muscle"
          },
          {
            stepNumber: 3,
            title: "Apply Light Compression",
            description: "For leg or arm strains, wrap with an elastic bandage to minimize local muscle spasms and swelling.",
            imagePrompt: "Thigh wrapped in elastic bandage"
          },
          {
            stepNumber: 4,
            title: "Elevate (If Possible)",
            description: "Elevate the injured limb to decrease pooling. For back strains, rest in a neutral position with knees bent.",
            imagePrompt: "Lying flat with knees bent over pillow for back strain"
          },
          {
            stepNumber: 5,
            title: "Gentle Heat (After 48 Hours)",
            description: "After 48 hours, switch from ice to mild heat to increase blood circulation and promote healing.",
            imagePrompt: "Warm compress applied to muscle"
          }
        ],
        doNots: [
          "Do not stretch the muscle aggressively during the acute stage.",
          "Do not return to high-intensity training until fully pain-free."
        ],
        whenToSeekHelp: [
          "Complete loss of muscle function (e.g. unable to lift heel or flex arm).",
          "A visible gap, dent, or bulge in the muscle belly.",
          "Severe back pain radiating down both legs or loss of bowel control (emergency)."
        ],
        estimatedRecovery: "2 - 8 weeks"
      }
    ]
  },
  {
    id: "burns",
    slug: "burns",
    name: "Burns",
    icon: "Flame",
    color: "#00E5C4",
    description: "Thermal, chemical, or electrical injuries to the skin and tissues. Crucial to cool quickly.",
    formula: "C.C.C",
    formulaExpanded: ["Cool", "Cover", "Call"],
    types: [
      {
        id: "first-degree",
        name: "1st Degree Burn (Superficial)",
        bodyPart: "Skin / Outer Layer",
        severity: "mild",
        overview: "Affects only the outer layer of skin (epidermis). Characterized by redness, mild swelling, and pain (e.g. mild sunburn).",
        formula: {
          acronym: "C.C.C",
          steps: ["Cool under cool running water.", "Cover with a clean, non-stick dressing.", "Call a doctor if widespread."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Cool the Burn",
            description: "Immediately hold the burned skin under cool, gentle running water for 10 to 20 minutes.",
            imagePrompt: "Water running over red skin of hand",
            warning: "Do NOT use ice, freezing water, or butter. Extreme cold damages tissue further, and grease traps heat."
          },
          {
            stepNumber: 2,
            title: "Remove Constricting Items",
            description: "Gently slip off rings, bands, or clothing near the burn before the area begins to swell.",
            imagePrompt: "Removing watch from wrist gently"
          },
          {
            stepNumber: 3,
            title: "Apply Aloe Vera",
            description: "If the skin is unbroken, apply a thin layer of aloe vera gel or moisturizing lotion to soothe the dry redness.",
            imagePrompt: "Applying gel to red patch on skin"
          },
          {
            stepNumber: 4,
            title: "Cover Loosely",
            description: "Cover with a clean, dry, sterile non-stick bandage or plastic wrap layer to protect from dirt.",
            imagePrompt: "Loose sterile bandage on arm"
          },
          {
            stepNumber: 5,
            title: "Take Mild Pain Relievers",
            description: "Take ibuprofen or acetaminophen if needed to dull the local smarting.",
            imagePrompt: "Pills and glass of water"
          }
        ],
        doNots: [
          "Do not apply butter, oil, toothpaste, or grease to the burn.",
          "Do not use ice or ice water directly on the burn."
        ],
        whenToSeekHelp: [
          "The burn covers a large area of the body (larger than 3 inches).",
          "The burn is on the face, hands, feet, groin, or major joints."
        ],
        estimatedRecovery: "3 - 6 days"
      },
      {
        id: "second-degree",
        name: "2nd Degree Burn (Partial Thickness)",
        bodyPart: "Skin / Mid Layer",
        severity: "moderate",
        overview: "Affects both epidermis and dermis. Causes blisters, severe swelling, weeping wounds, and intense pain.",
        formula: {
          acronym: "C.C.C",
          steps: ["Cool with clean running water.", "Cover with loose sterile wrap.", "Call medical professionals."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Cool the Burn Site",
            description: "Run cool water over the burn for at least 15-20 minutes. If running water isn't available, apply a clean, wet compress.",
            imagePrompt: "Holding hand under kitchen tap running water"
          },
          {
            stepNumber: 2,
            title: "Do Not Pop Blisters",
            description: "Keep any blisters intact to protect the raw skin underneath from infection.",
            imagePrompt: "Intact blister on skin",
            warning: "Popping blisters increases the risk of severe infection and scarring significantly."
          },
          {
            stepNumber: 3,
            title: "Cover with Sterile Wrap",
            description: "Cover the burn loosely with a sterile, non-adherent pad. Plastic cling wrap is an excellent sterile cover.",
            imagePrompt: "Cling wrap wrapped loosely around forearm burn"
          },
          {
            stepNumber: 4,
            title: "Elevate Burned Limb",
            description: "Elevate the burned arm or leg above heart level to limit fluid accumulation and throbbing.",
            imagePrompt: "Arm elevated on pillow"
          },
          {
            stepNumber: 5,
            title: "Manage Shock and Hydration",
            description: "Have the patient drink water to stay hydrated. Keep them warm and calm.",
            imagePrompt: "Drinking water from a cup"
          }
        ],
        doNots: [
          "Do not pop or drain blisters.",
          "Do not pull clothing that is stuck to the burn site."
        ],
        whenToSeekHelp: [
          "The burn is larger than the patient's palm.",
          "Signs of infection develop (yellow pus, red streaks, fever).",
          "The burn is on hands, feet, face, or airway."
        ],
        estimatedRecovery: "2 - 3 weeks"
      },
      {
        id: "third-degree",
        name: "3rd Degree Burn (Full Thickness)",
        bodyPart: "Deep Tissue",
        severity: "severe",
        overview: "All layers of skin are destroyed, reaching fat, muscle, or bone. Skin appears charred, white, or leathery. Pain may be absent due to nerve destruction.",
        formula: {
          acronym: "C.C.C",
          steps: ["Do not cool with water (risk of shock).", "Cover with clean, dry sterile sheet.", "Call emergency services immediately."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Call Emergency Services (999)",
            description: "Immediately call EMS. This is a critical medical emergency requiring advanced burn unit care.",
            imagePrompt: "Dialing emergency call on phone",
            warning: "Do NOT apply water or ice. Cooling large, deep burns can cause rapid hypothermia and shock."
          },
          {
            stepNumber: 2,
            title: "Ensure Safety first",
            description: "Remove the patient from the source of heat, smoke, or electrical current safely.",
            imagePrompt: "Evacuating hazard area symbol"
          },
          {
            stepNumber: 3,
            title: "Do Not Remove Stuck Clothing",
            description: "Cut away loose clothing around the burn, but leave any fabric that is fused to the wound.",
            imagePrompt: "Scissors cutting shirt fabric"
          },
          {
            stepNumber: 4,
            title: "Cover the Wounds",
            description: "Cover the burn area loosely with a sterile, dry, non-fluffy sheet or non-stick dressing.",
            imagePrompt: "Sterile sheet placed gently over patient"
          },
          {
            stepNumber: 5,
            title: "Monitor Breathing & Shock",
            description: "Lay the patient flat, elevate legs slightly, and watch for signs of airway swelling (hoarse voice, soot in nose).",
            imagePrompt: "Checking breathing, hand on chest"
          }
        ],
        doNots: [
          "Do not soak the burn in water.",
          "Do not peel off skin or pull stuck fabrics.",
          "Do not apply any creams, ointments, or home remedies."
        ],
        whenToSeekHelp: [
          "All 3rd-degree burns require emergency room treatment. Activate emergency systems immediately."
        ],
        estimatedRecovery: "Surgical grafting required (months)"
      },
      {
        id: "chemical-burn",
        name: "Chemical Burn",
        bodyPart: "Skin / Eyes",
        severity: "severe",
        overview: "Tissue damage caused by exposure to strong acids, alkalis, solvents, or household cleaners.",
        formula: {
          acronym: "C.C.C",
          steps: ["Flush chemical away with running water.", "Cover loosely with clean dressing.", "Call poison control / emergency."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Protect Yourself",
            description: "Put on gloves or protective eyewear before assisting the patient to avoid self-contamination.",
            imagePrompt: "Hands putting on nitrile gloves"
          },
          {
            stepNumber: 2,
            title: "Brush Off Dry Powders",
            description: "If the chemical is a dry powder, brush it off the skin completely before using water.",
            imagePrompt: "Brushing white powder off arm with cardboard",
            warning: "Water can activate certain dry chemicals, causing a highly exothermic reaction that worsens burns."
          },
          {
            stepNumber: 3,
            title: "Flush with Copious Water",
            description: "Flood the area with cool, low-pressure running water for at least 20 minutes.",
            imagePrompt: "Water flushing arm continuously"
          },
          {
            stepNumber: 4,
            title: "Remove Contaminated Items",
            description: "Gently remove all clothing, jewelry, and shoes contaminated by the chemical while flushing.",
            imagePrompt: "Removing shirt under running water shower"
          },
          {
            stepNumber: 5,
            title: "Cover and Seek Medical Aid",
            description: "Cover the flushed skin with a clean, loose dry wrap and take the patient to the hospital.",
            imagePrompt: "Hospital logo sign"
          }
        ],
        doNots: [
          "Do not try to neutralize acids with bases (or vice versa), as the chemical reaction generates intense heat.",
          "Do not rub the skin with force."
        ],
        whenToSeekHelp: [
          "All chemical burns require professional consultation. Call emergency services immediately if chemical is in eyes or swallowed."
        ],
        estimatedRecovery: "Variable (weeks to months)"
      },
      {
        id: "electrical-burn",
        name: "Electrical Burn",
        bodyPart: "Internal Organs / Skin",
        severity: "severe",
        overview: "Thermal damage along path of current. Often has small entrance/exit skin wounds but massive hidden internal tissue and heart damage.",
        formula: {
          acronym: "C.C.C",
          steps: ["Isolate source (do not touch patient).", "Check breathing & start CPR if needed.", "Call emergency services immediately."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Ensure Source is Turned Off",
            description: "Never touch the patient if they are still in contact with the live current. Shut off breaker or use wooden broom.",
            imagePrompt: "Circuit breaker panel showing off switch",
            warning: "Touching a patient contact-welded to a live current will instantly shock and incapacitate you too."
          },
          {
            stepNumber: 2,
            title: "Call Emergency Services (999)",
            description: "EMS is mandatory. Current paths can disrupt heart rhythms and cause delayed cardiac arrest.",
            imagePrompt: "Red phone calling emergency"
          },
          {
            stepNumber: 3,
            title: "Check Responsiveness & Breathing",
            description: "Determine if they are breathing. If not breathing, start CPR immediately.",
            imagePrompt: "Positioning hands for chest compressions"
          },
          {
            stepNumber: 4,
            title: "Locate and Dress Burn Wounds",
            description: "Look for entrance (where current entered) and exit (where current grounded) wounds. Dress them with dry sterile sheets.",
            imagePrompt: "Locating small black burn marks on foot"
          },
          {
            stepNumber: 5,
            title: "Treat for Shock",
            description: "Lay the patient down, keep them warm, and monitor heart rate continuously.",
            imagePrompt: "Lying patient wrapped in foil spacesheet"
          }
        ],
        doNots: [
          "Do not approach the patient until you are 100% sure the current is disconnected.",
          "Do not apply water or ointments to the burn sites."
        ],
        whenToSeekHelp: [
          "All electrical shocks and burns require immediate emergency medical examination."
        ],
        estimatedRecovery: "Variable (highly critical)"
      }
    ]
  },
  {
    id: "bleeding-wounds",
    slug: "bleeding-wounds",
    name: "Bleeding & Wounds",
    icon: "Droplet",
    color: "#00E5C4",
    description: "Open wounds, cuts, lacerations, or major arterial bleeding requiring direct control and wound management.",
    formula: "P.A.D",
    formulaExpanded: ["Pressure", "Apply dressing", "Don't remove"],
    types: [
      {
        id: "minor-cut",
        name: "Minor Cut / Abrasion",
        bodyPart: "Skin / Extremities",
        severity: "mild",
        overview: "Superficial scratches or shallow incisions that break the skin, resulting in minor bleeding that clots quickly.",
        formula: {
          acronym: "P.A.D",
          steps: ["Apply direct pressure to stop bleeding.", "Apply clean sterile dressing.", "Do not remove initial dressing."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Wash Your Hands",
            description: "Clean your hands thoroughly with soap and water before touching the wound to prevent bacterial entry.",
            imagePrompt: "Lathering hands under water faucet"
          },
          {
            stepNumber: 2,
            title: "Apply Mild Pressure",
            description: "Hold a clean gauze pad against the cut for a few minutes until bleeding stops.",
            imagePrompt: "Pinch finger cut with clean tissue"
          },
          {
            stepNumber: 3,
            title: "Clean the Wound",
            description: "Rinse the cut under lukewarm tap water for 5 minutes. Gently clean surrounding skin with soap.",
            imagePrompt: "Washing scratch under running water faucet",
            warning: "Do not scrub the wound or use harsh chemicals like hydrogen peroxide, as it delays skin healing."
          },
          {
            stepNumber: 4,
            title: "Apply Antibiotic Ointment",
            description: "Apply a thin layer of petroleum jelly or antibiotic ointment to keep the skin moist and reduce scarring.",
            imagePrompt: "Squeezing cream onto clean fingertip"
          },
          {
            stepNumber: 5,
            title: "Cover with Adhesive Strip",
            description: "Apply a sterile band-aid or adhesive strip over the cut to protect it from dust and friction.",
            imagePrompt: "Applying adhesive bandage over finger"
          }
        ],
        doNots: [
          "Do not blow on the wound.",
          "Do not use dirty cloths to apply pressure."
        ],
        whenToSeekHelp: [
          "Bleeding does not stop after 10 minutes of direct pressure.",
          "The cut is jagged, deep, or exposes yellow fat.",
          "The wound contains embedded dirt or glass that won't wash away."
        ],
        estimatedRecovery: "3 - 7 days"
      },
      {
        id: "deep-laceration",
        name: "Deep Laceration",
        bodyPart: "Limbs / Torso / Face",
        severity: "moderate",
        overview: "A deep, jagged cut that penetrates the subcutaneous fat layers, often requiring stitches to heal properly.",
        formula: {
          acronym: "P.A.D",
          steps: ["Press firmly with clean pads.", "Apply compression dressing.", "Do not remove soaked gauze (layer instead)."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Apply Firm Direct Pressure",
            description: "Immediately press a sterile pad or clean cloth directly onto the laceration. Hold continuous pressure.",
            imagePrompt: "Hand pressing down hard with thick gauze on leg"
          },
          {
            stepNumber: 2,
            title: "Elevate Above Heart",
            description: "If the cut is on an arm or leg, raise the limb above the heart level while maintaining pressure.",
            imagePrompt: "Elevated arm with bandage being held by patient"
          },
          {
            stepNumber: 3,
            title: "Bandage the Dressing",
            description: "Wrap a bandage firmly over the dressing to hold it in place. Ensure it is snug but does not stop blood flow below.",
            imagePrompt: "Wrapping roller bandage over gauze pad"
          },
          {
            stepNumber: 4,
            title: "Add Dressings on Top if Soaked",
            description: "If blood seeps through, do not peel off the bandage. Add more gauze on top and keep pressing.",
            imagePrompt: "Layering a second pad on top of bloody bandage",
            warning: "Peeling off the bottom dressing tears away the newly formed blood clots and restarts bleeding."
          },
          {
            stepNumber: 5,
            title: "Seek Medical Stitches",
            description: "Go to urgent care or ER within 6 hours. Delayed closure increases infection risk significantly.",
            imagePrompt: "Clinic entrance showing medical icon"
          }
        ],
        doNots: [
          "Do not pull out the initial layer of dressing.",
          "Do not wash a deep, heavily bleeding wound under the tap."
        ],
        whenToSeekHelp: [
          "Edges of the cut are gaping open.",
          "The laceration is on the face or over a joint.",
          "Wound was caused by a dirty, rusty nail, or animal bite."
        ],
        estimatedRecovery: "1 - 2 weeks"
      },
      {
        id: "puncture-wound",
        name: "Puncture Wound",
        bodyPart: "Foot / Hand / Body",
        severity: "moderate",
        overview: "A narrow, deep injury caused by sharp pointed objects (nails, needles, teeth). High risk of deep anaerobic infection.",
        formula: {
          acronym: "P.A.D",
          steps: ["Pressure surrounding area.", "Apply sterile dressing.", "Don't remove embedded objects."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Leave Embedded Objects",
            description: "If the object (nail, glass) is still stuck, do NOT pull it out. Leave it in place.",
            imagePrompt: "Nail protruding from sole of foot, supported by gauze",
            warning: "Removing an embedded object can act as removing a plug, triggering uncontrollable internal bleeding."
          },
          {
            stepNumber: 2,
            title: "Control Bleeding Gently",
            description: "Apply pressure around the sides of the object, not directly on top of it.",
            imagePrompt: "Hands pressing either side of protruding nail"
          },
          {
            stepNumber: 3,
            title: "Stabilize the Object",
            description: "Pack bulky dressings or rolled bandages around the object to keep it from shifting. Tape them in place.",
            imagePrompt: "Bulky dressings securing nail in place"
          },
          {
            stepNumber: 4,
            title: "Clean Only if Superficial",
            description: "If the object is gone and wound is shallow, wash the area thoroughly with soap and water.",
            imagePrompt: "Washing sole of foot with soap"
          },
          {
            stepNumber: 5,
            title: "Get Tetanus Shot Assessment",
            description: "Consult a doctor immediately. Deep punctures are prime targets for tetanus bacteria.",
            imagePrompt: "Injection syringe symbol"
          }
        ],
        doNots: [
          "Do not remove an embedded object yourself.",
          "Do not probe inside the wound to look for debris."
        ],
        whenToSeekHelp: [
          "The object is embedded deeply or in chest/abdomen.",
          "Patient has not had a tetanus booster in the last 5 years.",
          "The wound was caused by an animal or human bite."
        ],
        estimatedRecovery: "1 - 3 weeks"
      },
      {
        id: "nosebleed",
        name: "Nosebleed (Epistaxis)",
        bodyPart: "Nose / Face",
        severity: "mild",
        overview: "Rupture of small blood vessels in the nasal septum, commonly due to dry air or minor trauma.",
        formula: {
          acronym: "P.A.D",
          steps: ["Pinch soft part of nose.", "Apply cold compress on bridge.", "Do not tilt head backward."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Sit Up and Lean Forward",
            description: "Have the patient sit upright and tilt their head slightly forward over a bowl or tissue.",
            imagePrompt: "Person sitting leaning forward holding nose",
            warning: "Do NOT tilt the head back. This causes blood to run down the throat, leading to choking or vomiting."
          },
          {
            stepNumber: 2,
            title: "Pinch the Soft Part of the Nose",
            description: "Use thumb and index finger to pinch the soft nostrils closed firmly for a full 10 minutes.",
            imagePrompt: "Finger pinching soft lower nostrils"
          },
          {
            stepNumber: 3,
            title: "Breathe Through the Mouth",
            description: "Instruct the patient to breathe calmly through their mouth while keeping the nose pinched.",
            imagePrompt: "Mouth open breathing calmly"
          },
          {
            stepNumber: 4,
            title: "Apply Ice Bridge",
            description: "Place a cold compress or ice pack over the hard bony bridge of the nose to constrict vessels.",
            imagePrompt: "Ice pack on bridge of nose"
          },
          {
            stepNumber: 5,
            title: "Release and Rest",
            description: "After 10 minutes, release pressure. Avoid blowing, sniffing, or bending down for several hours.",
            imagePrompt: "Resting sitting in armchair"
          }
        ],
        doNots: [
          "Do not lean backward or lie flat.",
          "Do not pack the nostrils with tissues or cotton pads.",
          "Do not blow the nose once bleeding stops."
        ],
        whenToSeekHelp: [
          "Nosebleed lasts longer than 20 minutes despite pressure.",
          "Bleeding is extremely heavy and pouring down the back of throat.",
          "Nosebleed occurs after a head injury (skull fracture risk)."
        ],
        estimatedRecovery: "1 - 2 hours"
      },
      {
        id: "severe-bleeding",
        name: "Severe Bleeding / Hemorrhage",
        bodyPart: "Arteries / Large Veins",
        severity: "severe",
        overview: "Rapid, spurting, or pooling blood loss that can lead to shock and death in minutes. Requires immediate, aggressive intervention.",
        formula: {
          acronym: "P.A.D",
          steps: ["Press with bodyweight directly on wound.", "Apply tourniquet or pressure bandage.", "Do not look under bandages."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Call 999 and Apply Pressure",
            description: "Shout for help, call EMS immediately, and press down on the wound with maximum force using clean cloths.",
            imagePrompt: "Two hands pressing down hard on leg wound"
          },
          {
            stepNumber: 2,
            title: "Apply a Tourniquet (For Limbs)",
            description: "If bleeding is from an arm or leg and is uncontrollable, place a tourniquet high on the limb (2-3 inches above the wound).",
            imagePrompt: "Windlass tourniquet tightened on thigh",
            warning: "Tighten tourniquet until the bleeding stops completely. Note the exact time it was applied."
          },
          {
            stepNumber: 3,
            title: "Pack the Wound (For Junctions)",
            description: "If tourniquets cannot be used (groin, armpit), pack sterile or clean gauze deeply into the wound cavity. Press hard.",
            imagePrompt: "Fingers stuffing gauze into deep wound cavity"
          },
          {
            stepNumber: 4,
            title: "Treat for Shock",
            description: "Lay the patient flat, raise their feet slightly if appropriate, and keep them warm with blankets.",
            imagePrompt: "Lying patient with elevated legs wrapped in blanket"
          },
          {
            stepNumber: 5,
            title: "Hold Pressure Until Help Arrives",
            description: "Never let go of the pressure. Keep pushing until paramedics physically take over the patient.",
            imagePrompt: "Paramedics arriving holding stretcher"
          }
        ],
        doNots: [
          "Do not remove the tourniquet once applied.",
          "Do not lift the dressing to see if bleeding has stopped."
        ],
        whenToSeekHelp: [
          "Severe hemorrhages are emergency events. Always activate emergency dispatch instantly."
        ],
        estimatedRecovery: "Hospital surgical care (weeks)"
      }
    ]
  },
  {
    id: "choking",
    slug: "choking",
    name: "Choking",
    icon: "Wind",
    color: "#00E5C4",
    description: "Airway obstruction by foreign objects. Time-critical response needed to prevent asphyxiation.",
    formula: "5-5",
    formulaExpanded: ["5 Back Blows", "5 Abdominal Thrusts"],
    types: [
      {
        id: "adult-choking",
        name: "Adult Choking",
        bodyPart: "Throat / Airway",
        severity: "severe",
        overview: "Foreign object lodged in the trachea of an adult, causing inability to breathe, speak, or cough effectively.",
        formula: {
          acronym: "5-5",
          steps: ["Deliver 5 sharp back blows.", "Give 5 abdominal thrusts (Heimlich)."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Verify the Blockage",
            description: "Ask 'Are you choking?' If they nod but cannot speak or make sound, the airway is completely blocked.",
            imagePrompt: "Choking person holding throat with hands (universal sign)",
            warning: "Do not intervene if the patient is coughing loudly. Encourage them to keep coughing."
          },
          {
            stepNumber: 2,
            title: "Deliver 5 Back Blows",
            description: "Stand behind and slightly to the side. Support their chest with one hand, lean them forward, and hit their back hard 5 times with the heel of your hand.",
            imagePrompt: "Striking patient's back between shoulder blades"
          },
          {
            stepNumber: 3,
            title: "Give 5 Abdominal Thrusts",
            description: "Stand behind them. Wrap your arms around their waist. Make a fist with one hand, place it just above the navel, grab it, and pull inward and upward sharply.",
            imagePrompt: "Abdominal thrust position just above belly button"
          },
          {
            stepNumber: 4,
            title: "Alternate 5 and 5",
            description: "Continue alternating 5 back blows and 5 abdominal thrusts until the object is expelled or they lose consciousness.",
            imagePrompt: "Repeating cycle graphics"
          },
          {
            stepNumber: 5,
            title: "Start CPR If Unconscious",
            description: "If they collapse, call 999 immediately. Lower them to the floor, open the mouth, check for object, and begin chest compressions.",
            imagePrompt: "CPR compressions on flat surface"
          }
        ],
        doNots: [
          "Do not perform blind finger sweeps in the mouth, as this pushes objects deeper.",
          "Do not try to force them to drink water."
        ],
        whenToSeekHelp: [
          "If the choking cycle is unsuccessful, or if the patient becomes unconscious, call 999 immediately."
        ],
        estimatedRecovery: "Instant relief on expulsion"
      },
      {
        id: "child-choking",
        name: "Child Choking (1-8 yrs)",
        bodyPart: "Throat / Airway",
        severity: "severe",
        overview: "Airway obstruction in a toddler or child. Requires adapted force compared to adults.",
        formula: {
          acronym: "5-5",
          steps: ["Give 5 back blows (adapted force).", "Give 5 abdominal thrusts (Heimlich)."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Assess Choking",
            description: "Look for high-pitched squeaks, gasping, or blue lips. Ensure they cannot speak or cough.",
            imagePrompt: "Child gasping holding neck"
          },
          {
            stepNumber: 2,
            title: "Kneel and Give 5 Back Blows",
            description: "Kneel down behind the child to match their height. Lean them forward and strike between the shoulder blades with the heel of your hand.",
            imagePrompt: "Kneeling behind child giving back blows",
            warning: "Use slightly less force than you would for an adult, adjusting for the child's size."
          },
          {
            stepNumber: 3,
            title: "Deliver 5 Abdominal Thrusts",
            description: "Place your fist slightly above the belly button. Perform quick, sharp upward thrusts, being careful not to press on the ribcage.",
            imagePrompt: "Delivering upward thrusts to child's abdomen"
          },
          {
            stepNumber: 4,
            title: "Repeat the Loop",
            description: "Keep repeating the 5 back blows and 5 abdominal thrusts. Call out for someone to dial emergency services.",
            imagePrompt: "Loop cycle graphic child"
          },
          {
            stepNumber: 5,
            title: "Prepare CPR",
            description: "If the child goes limp, place them on the floor. Look inside mouth. Start CPR: 30 compressions, then check mouth, then 2 rescue breaths.",
            imagePrompt: "Child CPR technique diagram"
          }
        ],
        doNots: [
          "Do not press on the lower tip of the breastbone (xiphoid process).",
          "Do not lift the child off the floor while performing thrusts."
        ],
        whenToSeekHelp: [
          "Call 999 immediately if the obstruction is not cleared in the first two cycles, or if the child collapses."
        ],
        estimatedRecovery: "Immediate resolution on clearing"
      },
      {
        id: "infant-choking",
        name: "Infant Choking (<1 yr)",
        bodyPart: "Airway / Throat",
        severity: "severe",
        overview: "Airway obstruction in an infant. Standard Heimlich maneuvers are prohibited due to fragile liver and abdominal organs.",
        formula: {
          acronym: "5-5",
          steps: ["Deliver 5 gentle chest thrusts.", "Deliver 5 sharp back slaps."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Confirm Obstruction",
            description: "Look for silent crying, blue facial skin, or inability to make sounds or breathe.",
            imagePrompt: "Infant face showing bluish tint"
          },
          {
            stepNumber: 2,
            title: "Position Infant Face Down",
            description: "Lay the baby face down along your forearm, supporting their jaw with your hand. Point their head downwards.",
            imagePrompt: "Infant resting face down on forearm, head lower than chest",
            warning: "Do NOT squeeze the soft tissues of the baby's throat. Support the jaw bony structure only."
          },
          {
            stepNumber: 3,
            title: "Deliver 5 Back Slaps",
            description: "Give 5 firm, distinct slaps between the shoulder blades using the heel of your free hand.",
            imagePrompt: "Hitting baby's back with hand heel while on arm"
          },
          {
            stepNumber: 4,
            title: "Flip and Give 5 Chest Thrusts",
            description: "Turn the baby face up along your thigh, head low. Use two fingers on the center of the breastbone to compress 5 times.",
            imagePrompt: "Two fingers compressing infant breastbone",
            warning: "Never use abdominal thrusts (Heimlich) on an infant. It causes severe internal bleeding."
          },
          {
            stepNumber: 5,
            title: "Alternate and Call Emergency",
            description: "Continue the 5 slaps and 5 thrusts cycle. If alone, perform for 1 minute before calling 999.",
            imagePrompt: "Timer showing 1 minute"
          }
        ],
        doNots: [
          "Do not use Heimlich abdominal thrusts on infants.",
          "Do not sweep the mouth unless you see the object clearly."
        ],
        whenToSeekHelp: [
          "If the infant loses consciousness or the object is not cleared immediately, dial 999."
        ],
        estimatedRecovery: "Immediate upon clearing"
      },
      {
        id: "pregnant-obese",
        name: "Choking (Pregnant or Obese)",
        bodyPart: "Throat / Airway",
        severity: "severe",
        overview: "Airway obstruction in patients where abdominal thrusts are impossible or dangerous (late pregnancy or large frame). Chest thrusts are used instead.",
        formula: {
          acronym: "5-5",
          steps: ["Deliver 5 back blows.", "Give 5 chest thrusts."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Assess Choking Status",
            description: "Verify if they are unable to speak or cough. Confirm they are pregnant or cannot wrap arms around their belly.",
            imagePrompt: "Pregnant woman choking holding neck"
          },
          {
            stepNumber: 2,
            title: "Deliver 5 Back Blows",
            description: "Lean them forward and strike between the shoulder blades firmly 5 times with your hand heel.",
            imagePrompt: "Striking back of pregnant woman leaning forward"
          },
          {
            stepNumber: 3,
            title: "Position for Chest Thrusts",
            description: "Stand behind the patient. Place your arms under their armpits. Place your fist on the center of their breastbone.",
            imagePrompt: "Wrap arms under armpits, fist on breastbone",
            warning: "Do NOT compress the abdomen. Pressing the abdomen can rupture the placenta or damage internal organs."
          },
          {
            stepNumber: 4,
            title: "Give 5 Chest Thrusts",
            description: "Pull backward sharply, compressing the chest cage inward. Ensure the pressure is directly on the sternum.",
            imagePrompt: "Compressing breastbone backward sharply"
          },
          {
            stepNumber: 5,
            title: "Alternate and Call 999",
            description: "Repeat the cycle of 5 back blows and 5 chest thrusts. Call emergency services immediately.",
            imagePrompt: "Dialing 999"
          }
        ],
        doNots: [
          "Do not perform abdominal thrusts under any circumstances.",
          "Do not press on the bottom of the sternum ribs."
        ],
        whenToSeekHelp: [
          "Call emergency services immediately if the airway remains obstructed or if the patient collapses."
        ],
        estimatedRecovery: "Immediate on clearing"
      }
    ]
  },
  {
    id: "heart-cardiac",
    slug: "heart-cardiac",
    name: "Heart & Cardiac",
    icon: "Heart",
    color: "#FF4D4D",
    description: "Heart attack symptoms and cardiac arrest protocols. Time is muscle; CPR and AED guidelines.",
    formula: "C.A.B",
    formulaExpanded: ["Compressions", "Airway", "Breathing"],
    types: [
      {
        id: "heart-attack",
        name: "Heart Attack (Myocardial Infarction)",
        bodyPart: "Chest / Heart",
        severity: "severe",
        overview: "Blockage of blood flow to the heart muscle. Patient is conscious but experiencing crushing pain and cardiac distress.",
        formula: {
          acronym: "C.A.B",
          steps: ["Check conscious response.", "Keep airway open.", "Provide rescue breathing if they collapse."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Call Emergency Services Immediately",
            description: "Call 999 right away. Do not delay. Every minute counts.",
            imagePrompt: "Calling 999 on mobile screen",
            warning: "Do not allow the patient to drive themselves to the hospital."
          },
          {
            stepNumber: 2,
            title: "Encourage Rest in W-Position",
            description: "Help the patient sit on the floor, back supported, with knees bent. This reduces heart strain.",
            imagePrompt: "Patient sitting leaning back on wall with knees bent (W-position)"
          },
          {
            stepNumber: 3,
            title: "Administer Aspirin",
            description: "If they are not allergic, have them chew a full adult aspirin (300mg) or 2-4 baby aspirins slowly.",
            imagePrompt: "Patient chewing aspirin pill",
            warning: "Never give aspirin if the patient is allergic, has severe bleeding, or is unconscious."
          },
          {
            stepNumber: 4,
            title: "Loosen Tight Clothes",
            description: "Undo collars, ties, belts, or waistbands to ease breathing and ventilation.",
            imagePrompt: "Loosening neck collar buttons"
          },
          {
            stepNumber: 5,
            title: "Monitor for Cardiac Arrest",
            description: "Keep them calm. If they lose consciousness and stop normal breathing, begin CPR instantly.",
            imagePrompt: "Checking pulse and breathing rate"
          }
        ],
        doNots: [
          "Do not leave the patient unattended.",
          "Do not give them food or drink other than aspirin.",
          "Do not ignore symptoms or wait to see if they pass."
        ],
        whenToSeekHelp: [
          "Any crushing chest pain, pain radiating to left arm/jaw, or sudden unexplained sweating and nausea requires an immediate 999 call."
        ],
        estimatedRecovery: "Hospital post-infarct care (months)"
      },
      {
        id: "cardiac-arrest",
        name: "Cardiac Arrest (CPR)",
        bodyPart: "Heart / Whole Body",
        severity: "severe",
        overview: "Heart stops beating effectively. Patient is unconscious, unresponsive, and not breathing normally. Immediate CPR is required.",
        formula: {
          acronym: "C.A.B",
          steps: ["Give 30 high-quality compressions.", "Tilt head to open the airway.", "Give 2 rescue breaths."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Check Responsiveness & Call 999",
            description: "Shake shoulders and shout 'Are you okay?'. If no response and not breathing, call 999 and get an AED.",
            imagePrompt: "Shaking shoulders of unconscious patient"
          },
          {
            stepNumber: 2,
            title: "Start Chest Compressions",
            description: "Place heel of one hand on center of chest, other hand on top. Push hard and fast (100-120 bpm, 2-2.4 inches deep).",
            imagePrompt: "Interlocking hands on chest center",
            warning: "Push to the beat of 'Staying Alive'. Allow the chest to recoil fully between compressions."
          },
          {
            stepNumber: 3,
            title: "Open the Airway",
            description: "Tilt the head back slightly and lift the chin to open the respiratory pathway.",
            imagePrompt: "Head-tilt chin-lift maneuver demonstration"
          },
          {
            stepNumber: 4,
            title: "Give 2 Rescue Breaths",
            description: "Pinch nose shut, seal your mouth over theirs, and blow for 1 second. Watch the chest rise. Repeat once.",
            imagePrompt: "Rescue breathing mouth-to-mouth",
            warning: "If you are untrained or unwilling to give breaths, perform hands-only CPR (continuous compressions)."
          },
          {
            stepNumber: 5,
            title: "Continue CPR (30:2 Cycle)",
            description: "Repeat the cycle of 30 compressions and 2 breaths. Keep going until paramedics arrive or AED is ready.",
            imagePrompt: "Repeating 30 compressions and 2 breaths graphic"
          }
        ],
        doNots: [
          "Do not stop CPR compressions for more than 10 seconds.",
          "Do not compress less than 2 inches deep."
        ],
        whenToSeekHelp: [
          "Cardiac arrest is a critical life-threatening emergency. Immediate 999 call is required."
        ],
        estimatedRecovery: "Highly critical (emergency room)"
      },
      {
        id: "aed-use",
        name: "AED Use (Automated External Defibrillator)",
        bodyPart: "Chest / Heart",
        severity: "severe",
        overview: "Using a portable AED device to analyze heart rhythms and deliver an electric shock to restore sinus rhythm.",
        formula: {
          acronym: "C.A.B",
          steps: ["Apply pads while compressions continue.", "Clear airway during shock.", "Resume compressions instantly after shock."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Turn On the AED",
            description: "Open the case and turn on the device. Follow the verbal voice prompts precisely.",
            imagePrompt: "Opening and turning on AED machine"
          },
          {
            stepNumber: 2,
            title: "Apply Pads to Bare Chest",
            description: "Dry the chest. Place one pad on the upper right chest, and the other pad on the lower left side.",
            imagePrompt: "AED pads placement diagrams on chest",
            warning: "Ensure pads do not touch each other. Do not place pads directly over pacemakers or wet skin."
          },
          {
            stepNumber: 3,
            title: "Plug in Connector",
            description: "Plug the pad cable into the AED box. The device will start analyzing the heart rhythm.",
            imagePrompt: "Plugging cable into AED socket"
          },
          {
            stepNumber: 4,
            title: "Clear the Patient",
            description: "Ensure no one is touching the patient while the AED analyzes or delivers a shock.",
            imagePrompt: "Hands back 'Everyone Clear' gesture",
            warning: "Touching the patient during analysis can corrupt readings or cause shock transfer."
          },
          {
            stepNumber: 5,
            title: "Deliver Shock if Advised",
            description: "If the AED announces 'Shock Advised', yell 'Clear!' and press the flashing shock button. Immediately resume CPR.",
            imagePrompt: "Pressing flashing red shock button on AED"
          }
        ],
        doNots: [
          "Do not remove AED pads to perform CPR.",
          "Do not use an AED in standing water."
        ],
        whenToSeekHelp: [
          "Always call 999 immediately before using an AED."
        ],
        estimatedRecovery: "Variable (critical care)"
      },
      {
        id: "defibrillation",
        name: "Defibrillation Protocols",
        bodyPart: "Heart / Chest",
        severity: "severe",
        overview: "Advanced management of shockable rhythms (V-Fib, pulseless V-Tach) in conjunction with CPR cycle timing.",
        formula: {
          acronym: "C.A.B",
          steps: ["Deliver shock.", "Maintain airway.", "Ventilate between compressions."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Confirm Cardiac Arrest",
            description: "Check for unresponsiveness and lack of breathing. Begin chest compressions immediately.",
            imagePrompt: "Assessing patient on ground"
          },
          {
            stepNumber: 2,
            title: "Set Up Defibrillator",
            description: "Attach defibrillator pads without pausing compressions for more than 5 seconds.",
            imagePrompt: "Attaching pads to skin"
          },
          {
            stepNumber: 3,
            title: "Analyze Rhythm",
            description: "Stop compressions temporarily while the machine scans the electrical wave. Check if shock is needed.",
            imagePrompt: "ECG wave display on monitor"
          },
          {
            stepNumber: 4,
            title: "Shock and Resume Compressions",
            description: "Press shock if instructed. Instantly resume chest compressions for 2 minutes before scanning again.",
            imagePrompt: "Starting compressions immediately after shock"
          },
          {
            stepNumber: 5,
            title: "Coordinate with EMS",
            description: "Keep the defibrillator attached until advanced paramedic teams replace it with their equipment.",
            imagePrompt: "Emergency responders taking over"
          }
        ],
        doNots: [
          "Do not power off the defibrillator between cycles.",
          "Do not touch the patient during shock discharge."
        ],
        whenToSeekHelp: [
          "Defibrillation represents active cardiac arrest management. Call 999 immediately."
        ],
        estimatedRecovery: "Variable (emergency cardiac care)"
      }
    ]
  },
  {
    id: "poisoning",
    slug: "poisoning",
    name: "Poisoning",
    icon: "Skull",
    color: "#FFB830",
    description: "Ingestion, inhalation, or absorption of toxic substances. Contact poison control immediately.",
    formula: "R.P.C",
    formulaExpanded: ["Remove", "Prevent absorption", "Call poison control"],
    types: [
      {
        id: "ingested",
        name: "Ingested Poison",
        bodyPart: "Stomach / Digestive System",
        severity: "severe",
        overview: "Swallowing toxic household chemicals, medications, plants, or spoiled food substances.",
        formula: {
          acronym: "R.P.C",
          steps: ["Remove remaining poison from mouth.", "Prevent absorption (do not induce vomiting).", "Call poison control center."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Clear the Mouth",
            description: "Gently spit out any remaining chemical, pill, or plant parts from the mouth.",
            imagePrompt: "Spitting into sink"
          },
          {
            stepNumber: 2,
            title: "Identify the Substance",
            description: "Find the container or pill bottle. Keep it to describe to emergency doctors and poison control.",
            imagePrompt: "Holding chemical cleaner bottle with label visible",
            warning: "Do NOT induce vomiting unless explicitly told to do so by a medical expert. Corrosive chemicals burn the throat again on the way up."
          },
          {
            stepNumber: 3,
            title: "Call Poison Control / EMS",
            description: "Call Poison Control (1-800-222-1222 in US) or 999. Tell them the age, weight, and substance.",
            imagePrompt: "Making emergency phone call"
          },
          {
            stepNumber: 4,
            title: "Give Water (Only If Advised)",
            description: "Only if instructed by poison control, give the patient a small glass of water or milk to dilute the chemical.",
            imagePrompt: "Patient drinking small sip of water"
          },
          {
            stepNumber: 5,
            title: "Monitor for Shock or Coma",
            description: "Lay the patient on their side (recovery position) if they feel dizzy, to keep their airway clear in case of vomiting.",
            imagePrompt: "Patient in recovery position on floor"
          }
        ],
        doNots: [
          "Do not induce vomiting under any circumstances.",
          "Do not give syrup of ipecac or charcoal unless instructed."
        ],
        whenToSeekHelp: [
          "The patient is unconscious, convulsing, or having trouble breathing.",
          "The chemical swallowed was a strong acid or drain opener."
        ],
        estimatedRecovery: "Variable (highly toxic)"
      },
      {
        id: "inhaled",
        name: "Inhaled Poison (Carbon Monoxide/Gas)",
        bodyPart: "Lungs / Airway",
        severity: "severe",
        overview: "Inhaling toxic fumes, carbon monoxide, or chlorine gas, leading to chemical suffocation and cellular hypoxia.",
        formula: {
          acronym: "R.P.C",
          steps: ["Remove patient to fresh air.", "Prevent further inhalation.", "Call emergency services."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Move to Fresh Air Immediately",
            description: "Carry or lead the patient out of the gas-filled environment into open air immediately.",
            imagePrompt: "Escaping smoke-filled room to outdoors",
            warning: "Do not enter a confined toxic space yourself without proper breathing apparatus."
          },
          {
            stepNumber: 2,
            title: "Call Emergency Services (999)",
            description: "Call EMS. Inhaled toxins require high-flow oxygen therapy in a hospital.",
            imagePrompt: "Cell phone showing dial screen"
          },
          {
            stepNumber: 3,
            title: "Loosen Clothing",
            description: "Loosen shirts, buttons, or jackets around the neck and chest to make breathing easier.",
            imagePrompt: "Loosening patient's jacket zipper"
          },
          {
            stepNumber: 4,
            title: "Assess Breathing",
            description: "If they are not breathing or gasping, start CPR chest compressions and rescue breathing.",
            imagePrompt: "Performing chest compressions on floor"
          },
          {
            stepNumber: 5,
            title: "Keep Warm and Monitored",
            description: "Keep the patient warm and sitting upright if possible, to maximize lung expansion.",
            imagePrompt: "Sitting patient wrapped in space blanket"
          }
        ],
        doNots: [
          "Do not light matches or turn on electrical switches (risk of gas explosion).",
          "Do not stay in the toxic gas area to rescue belongings."
        ],
        whenToSeekHelp: [
          "All cases of inhaled chemical poisons or CO require immediate emergency room checks."
        ],
        estimatedRecovery: "Days to weeks (risk of neurological injury)"
      },
      {
        id: "skin-contact",
        name: "Skin Contact Poison",
        bodyPart: "Skin / Body Surface",
        severity: "moderate",
        overview: "Absorption of toxic chemicals or toxic plant oils (e.g. poison ivy/sumac) through the skin surface.",
        formula: {
          acronym: "R.P.C",
          steps: ["Remove contaminated clothing.", "Prevent absorption by washing.", "Call medical center/poison control."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Wash with Soap and Water",
            description: "Immediately wash the contact area under warm running water with mild soap for 15-20 minutes.",
            imagePrompt: "Washing arm under faucet with plenty of soap lather"
          },
          {
            stepNumber: 2,
            title: "Strip Contaminated Clothing",
            description: "Remove all contaminated clothing, shoes, and jewelry. Do not let the clothing touch other body parts.",
            imagePrompt: "Throwing shirt into plastic bag"
          },
          {
            stepNumber: 3,
            title: "Use Gloves",
            description: "Wear rubber or nitrile gloves when handling the patient's clothing or washing them.",
            imagePrompt: "Hands in yellow cleaning gloves",
            warning: "Chemicals can transfer from the patient's skin or clothes directly to your hands."
          },
          {
            stepNumber: 4,
            title: "Avoid Rubbing Hard",
            description: "Blot the skin dry with a clean towel. Do not rub or scratch, as this spreads toxins and irritates skin.",
            imagePrompt: "Patting arm with towel"
          },
          {
            stepNumber: 5,
            title: "Call Poison Control",
            description: "Contact Poison Control to determine if the specific chemical absorbed requires a specific antidote.",
            imagePrompt: "Poison control contact card"
          }
        ],
        doNots: [
          "Do not apply oily ointments or grease to chemical burns/skin contact sites.",
          "Do not scratch or pop blisters if they form."
        ],
        whenToSeekHelp: [
          "The chemical covers a large area (e.g. whole leg or chest).",
          "Signs of systemic poisoning occur (nausea, dizziness, trouble breathing).",
          "The chemical absorbed is a pesticide or organophosphate."
        ],
        estimatedRecovery: "1 - 3 weeks"
      },
      {
        id: "eye-contamination",
        name: "Eye Contamination Poisoning",
        bodyPart: "Eyes / Face",
        severity: "severe",
        overview: "Splashing corrosive chemicals, acids, or alkalis into the eyes, which can lead to permanent blindness.",
        formula: {
          acronym: "R.P.C",
          steps: ["Remove contact lenses if present.", "Prevent absorption by flushing.", "Call emergency department."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Flush Immediately",
            description: "Hold the eye open and wash with a gentle stream of clean, lukewarm water from the nose bridge outward.",
            imagePrompt: "Pouring water from cup into corner of open eye",
            warning: "Flush for a minimum of 20 continuous minutes. Do not let the runoff water enter the uninjured eye."
          },
          {
            stepNumber: 2,
            title: "Remove Contact Lenses",
            description: "If the patient wears contact lenses, gently remove them during the flushing process.",
            imagePrompt: "Removing contact lens from eye"
          },
          {
            stepNumber: 3,
            title: "Keep Eye Closed Afterwards",
            description: "After flushing, cover the eye loosely with a clean, dry patch or sterile gauze pad.",
            imagePrompt: "Eye covered with clean white patch"
          },
          {
            stepNumber: 4,
            title: "Do Not Rub the Eye",
            description: "Instruct the patient not to rub or press on their eye, as this can grind chemicals deeper into the cornea.",
            imagePrompt: "Hand held away from eye"
          },
          {
            stepNumber: 5,
            title: "Transport to ER Immediately",
            description: "Arrange emergency transport. Keep flushing the eye during transport if possible.",
            imagePrompt: "Ambulance dashboard interior view"
          }
        ],
        doNots: [
          "Do not use neutralizing chemical drops (like vinegar or baking soda) in the eye.",
          "Do not rub the eyeball."
        ],
        whenToSeekHelp: [
          "All chemical eye exposures are severe emergencies. Seek immediate ophthalmologist evaluation."
        ],
        estimatedRecovery: "Variable (weeks to months)"
      }
    ]
  },
  {
    id: "heat-cold",
    slug: "heat-cold",
    name: "Heat & Cold",
    icon: "Thermometer",
    color: "#FFB830",
    description: "Environmental emergencies: heat exhaustion, heatstroke, hypothermia, and frostbite instructions.",
    formula: "R.C.H",
    formulaExpanded: ["Remove", "Cool/Warm", "Hydrate"],
    types: [
      {
        id: "heat-exhaustion",
        name: "Heat Exhaustion",
        bodyPart: "Whole Body",
        severity: "moderate",
        overview: "Body overheating due to high temperatures and dehydration. Symptoms include heavy sweating, rapid pulse, and dizziness.",
        formula: {
          acronym: "R.C.H",
          steps: ["Remove from heat to cool environment.", "Cool by misting with water.", "Hydrate with sports drinks or water."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Move to a Cool Area",
            description: "Move the patient out of the sun into an air-conditioned room or shade.",
            imagePrompt: "Patient sitting in shade under tree"
          },
          {
            stepNumber: 2,
            title: "Loosen and Remove Clothing",
            description: "Take off excess layers of clothing. Loosen tight collars, shirts, and socks.",
            imagePrompt: "Removing thick socks and unbuttoning shirt"
          },
          {
            stepNumber: 3,
            title: "Cool the Body",
            description: "Apply cool, damp cloths to the neck, forehead, and armpits. Fan the patient vigorously.",
            imagePrompt: "Placing wet towels on forehead and neck"
          },
          {
            stepNumber: 4,
            title: "Hydrate Slowly",
            description: "Give them cool water, a sports drink, or oral rehydration solution. Have them take small sips.",
            imagePrompt: "Sipping sports drink slowly",
            warning: "Avoid ice-cold water, caffeine, or alcohol. Do not give liquids if they are vomiting or confused."
          },
          {
            stepNumber: 5,
            title: "Rest and Monitor",
            description: "Have them lie down with legs slightly elevated. Monitor for signs of heatstroke (lack of sweat, confusion).",
            imagePrompt: "Lying down legs propped up on backpack"
          }
        ],
        doNots: [
          "Do not force them to drink quickly.",
          "Do not allow them to return to heavy exercise immediately."
        ],
        whenToSeekHelp: [
          "Symptoms worsen or do not improve after 30 minutes.",
          "The patient begins to vomit or becomes disoriented.",
          "Body temperature reaches 103°F (39.4°C)."
        ],
        estimatedRecovery: "24 - 48 hours"
      },
      {
        id: "heatstroke",
        name: "Heatstroke",
        bodyPart: "Brain / Whole Body",
        severity: "severe",
        overview: "A life-threatening emergency where the body's cooling mechanism fails. Temperature exceeds 104°F (40°C), causing altered mental state, red dry skin, and collapse.",
        formula: {
          acronym: "R.C.H",
          steps: ["Remove from heat source immediately.", "Cool rapidly using ice baths or wet sheets.", "Hydrate (only if conscious, usually requires IV)."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Call Emergency Services (999)",
            description: "Call EMS instantly. Heatstroke is a critical emergency that causes organ failure and brain damage.",
            imagePrompt: "Ambulance emergency response"
          },
          {
            stepNumber: 2,
            title: "Move to Shade and Remove Clothes",
            description: "Bring the patient to a cool, shaded area and strip off all outer clothing.",
            imagePrompt: "Stripping outer jacket from patient"
          },
          {
            stepNumber: 3,
            title: "Rapidly Cool the Body",
            description: "Immerse the patient in a tub of cold water. If unavailable, wrap them in wet sheets and spray them with cold water.",
            imagePrompt: "Immersing patient in ice-water bath",
            warning: "Rapid cooling is key. Do not give any liquids by mouth, as they may choke due to altered consciousness."
          },
          {
            stepNumber: 4,
            title: "Apply Ice to Pulse Points",
            description: "Place ice packs wrapped in cloth on the groin, armpits, and sides of the neck where major arteries run close to the surface.",
            imagePrompt: "Ice packs on neck, armpits, and groin"
          },
          {
            stepNumber: 5,
            title: "Monitor Vitals flat",
            description: "Lay them flat. If they lose consciousness or stop breathing, begin CPR immediately.",
            imagePrompt: "Checking pulse and breathing rate"
          }
        ],
        doNots: [
          "Do not give aspirin or acetaminophen (they do not help environmental hyperthermia and can damage liver/kidneys).",
          "Do not give any food or liquids by mouth."
        ],
        whenToSeekHelp: [
          "Heatstroke is a critical medical emergency. Always call 999 immediately."
        ],
        estimatedRecovery: "Hospital ICU care (weeks)"
      },
      {
        id: "hypothermia",
        name: "Hypothermia",
        bodyPart: "Whole Body",
        severity: "severe",
        overview: "Core body temperature drops below 95°F (35°C) due to exposure to cold. Symptoms include shivering, slurred speech, and confusion.",
        formula: {
          acronym: "R.C.H",
          steps: ["Remove from cold and wet environment.", "Warm core body using dry blankets/warm environment.", "Hydrate with warm sweet liquids."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Remove from Cold Source",
            description: "Bring the patient into a warm shelter immediately. Handle them very gently.",
            imagePrompt: "Entering a warm wooden cabin",
            warning: "Handle the patient gently. Rough handling can trigger ventricular fibrillation (cardiac arrest)."
          },
          {
            stepNumber: 2,
            title: "Strip Wet Clothes",
            description: "Remove all wet, cold clothing and dry the patient's skin thoroughly.",
            imagePrompt: "Cutting off wet clothing with shears"
          },
          {
            stepNumber: 3,
            title: "Warm the Core first",
            description: "Wrap the patient's torso, head, and groin in warm, dry blankets. Use active warming (heating pads/warm water bags) wrapped in towels.",
            imagePrompt: "Patient wrapped in thick blankets, heating pad on chest"
          },
          {
            stepNumber: 4,
            title: "Offer Warm Sweet Drinks",
            description: "If conscious and able to swallow, give them warm, sweet non-caffeinated liquids (like warm broth or sweet tea).",
            imagePrompt: "Holding mug of warm tea",
            warning: "Never give alcohol or rub the patient's skin. Alcohol dilates vessels, causing rapid core heat loss."
          },
          {
            stepNumber: 5,
            title: "Monitor and Stay Close",
            description: "Check breathing rate. If breathing is shallow or stops, start CPR immediately. Do not leave them alone.",
            imagePrompt: "Lying wrapped patient, helper checking chest movement"
          }
        ],
        doNots: [
          "Do not apply direct heat source (like hot water bottles) directly to bare skin.",
          "Do not rub or massage the patient's limbs.",
          "Do not give alcohol."
        ],
        whenToSeekHelp: [
          "The patient is unconscious, breathing is shallow, or shivering stops but they are still cold (severe hypothermia)."
        ],
        estimatedRecovery: "Hours to days"
      },
      {
        id: "frostbite",
        name: "Frostbite",
        bodyPart: "Fingers / Toes / Nose / Ears",
        severity: "moderate",
        overview: "Freezing of skin and underlying tissues. Affected areas look white, waxy, and hard.",
        formula: {
          acronym: "R.C.H",
          steps: ["Remove from cold shelter.", "Warm area using warm water.", "Hydrate the patient."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Move to Warm Shelter",
            description: "Get the patient out of the cold wind and snow. Do not let them walk on frostbitten feet.",
            imagePrompt: "Sheltered indoor room"
          },
          {
            stepNumber: 2,
            title: "Do Not Rub the Area",
            description: "Never rub or massage frostbitten skin. This grinds ice crystals into tissues, destroying cells.",
            imagePrompt: "Hands kept apart away from face",
            warning: "Rubbing or massaging frostbitten areas causes severe, irreversible tissue damage."
          },
          {
            stepNumber: 3,
            title: "Rewarm in Warm Water",
            description: "Immerse the affected area in warm water (100-104°F or 37.8-40°C) for 20-30 minutes. The water should feel warm, not hot.",
            imagePrompt: "Hands soaking in basin of warm water"
          },
          {
            stepNumber: 4,
            title: "Dress with Loose Bandages",
            description: "Once rewarmed, dry the area gently. Place clean, sterile cotton or gauze between fingers or toes and wrap loosely.",
            imagePrompt: "Gauze strips placed between fingers"
          },
          {
            stepNumber: 5,
            title: "Transport to Hospital",
            description: "Seek immediate medical attention. Do not let the area refreeze once rewarmed.",
            imagePrompt: "Hospital building graphic"
          }
        ],
        doNots: [
          "Do not rub or massage the area with snow or hands.",
          "Do not use dry heat (fireplaces, stoves, radiators) to warm the area (numb skin burns easily).",
          "Do not walk on frostbitten toes if possible."
        ],
        whenToSeekHelp: [
          "Frostbitten skin remains gray, blue, or cold after warming.",
          "Blisters develop on the skin after rewarming."
        ],
        estimatedRecovery: "Weeks to months"
      }
    ]
  },
  {
    id: "allergic-reactions",
    slug: "allergic-reactions",
    name: "Allergic Reactions",
    icon: "ShieldAlert",
    color: "#FFB830",
    description: "Mild allergic responses to anaphylactic shock. Epinephrine injection and airway support protocols.",
    formula: "E.A.C",
    formulaExpanded: ["Epinephrine", "Antihistamine", "Call"],
    types: [
      {
        id: "mild-allergic",
        name: "Mild Allergic Reaction",
        bodyPart: "Skin / Immune System",
        severity: "mild",
        overview: "Localized immune response to allergens, causing localized hives, itching, nasal congestion, or watery eyes.",
        formula: {
          acronym: "E.A.C",
          steps: ["Observe closely (Epi not needed yet).", "Antihistamine administration.", "Call physician if symptoms spread."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Identify and Remove Allergen",
            description: "Identify what caused the allergy (food, pollen, cat hair) and distance the patient from it.",
            imagePrompt: "Moving away from flowering plant"
          },
          {
            stepNumber: 2,
            title: "Give Oral Antihistamine",
            description: "Administer an over-the-counter antihistamine (e.g. diphenhydramine or cetirizine) following dosage guidelines.",
            imagePrompt: "Taking small pink allergy tablet"
          },
          {
            stepNumber: 3,
            title: "Apply Cold Compress to Hives",
            description: "Place a cool, damp washcloth over itchy skin or hives to reduce swelling and irritation.",
            imagePrompt: "Cool washcloth on arm hives"
          },
          {
            stepNumber: 4,
            title: "Apply Hydrocortisone Cream",
            description: "If skin is itchy, apply a thin layer of 1% hydrocortisone cream to calm localized inflammation.",
            imagePrompt: "Applying cream to red arm patch"
          },
          {
            stepNumber: 5,
            title: "Monitor for 30 Minutes",
            description: "Watch the patient closely. Ensure they do not develop coughing, throat tightness, or facial swelling.",
            imagePrompt: "Timer showing 30 minutes",
            warning: "Mild reactions can rapidly progress to severe anaphylaxis. Never leave the patient alone."
          }
        ],
        doNots: [
          "Do not scratch the hives, as it spreads histamine and increases infection risk.",
          "Do not ignore coughing or hoarseness."
        ],
        whenToSeekHelp: [
          "Symptoms spread to multiple body systems (e.g., hives + stomach cramps).",
          "Breathing becomes wheezy, or voice becomes raspy and hoarse."
        ],
        estimatedRecovery: "12 - 24 hours"
      },
      {
        id: "anaphylaxis",
        name: "Anaphylaxis",
        bodyPart: "Airway / Whole Body",
        severity: "severe",
        overview: "A sudden, life-threatening systemic allergic reaction causing airway constriction, swelling of throat, and drop in blood pressure.",
        formula: {
          acronym: "E.A.C",
          steps: ["Inject Epinephrine in outer thigh.", "Give Antihistamine (if conscious).", "Call emergency services immediately."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Inject Epinephrine Immediately",
            description: "Locate their EpiPen. Press the auto-injector firmly into the outer mid-thigh until it clicks. Hold for 3 seconds.",
            imagePrompt: "EpiPen auto-injector being pressed into outer thigh through pants",
            warning: "Inject only in the outer thigh. Never inject into fingers, hands, or veins."
          },
          {
            stepNumber: 2,
            title: "Call Emergency Services (999)",
            description: "Call EMS right away. Explain that the patient has anaphylaxis and has received epinephrine.",
            imagePrompt: "Red phone calling emergency services"
          },
          {
            stepNumber: 3,
            title: "Lay Flat with Legs Elevated",
            description: "Have the patient lie flat on their back and raise their legs 12 inches to stabilize blood pressure.",
            imagePrompt: "Lying patient with legs raised on box"
          },
          {
            stepNumber: 4,
            title: "Observe for Second Wave",
            description: "A second reaction can occur. If symptoms do not improve or return, and EMS is delayed, a second dose of epinephrine can be given after 5-15 minutes.",
            imagePrompt: "Checking timer and EpiPen box"
          },
          {
            stepNumber: 5,
            title: "Monitor Airway & Prepare CPR",
            description: "If the patient stops breathing, place them on the floor and begin CPR immediately.",
            imagePrompt: "Delivering chest compressions"
          }
        ],
        doNots: [
          "Do not allow the patient to stand up or walk around.",
          "Do not place a pillow under their head if they are having breathing difficulty.",
          "Do not hesitate to use the EpiPen; the risk of untreated anaphylaxis far outweighs the risk of epinephrine."
        ],
        whenToSeekHelp: [
          "Anaphylaxis is a critical medical emergency. Call 999 immediately."
        ],
        estimatedRecovery: "Hospital observation for 4-24 hours"
      },
      {
        id: "insect-sting",
        name: "Insect Sting (Bee/Wasp)",
        bodyPart: "Skin / Immune System",
        severity: "mild",
        overview: "Local sting from hymenoptera insects, causing pain, swelling, and redness. Danger lies in allergic response.",
        formula: {
          acronym: "E.A.C",
          steps: ["Epinephrine ready (if allergic).", "Apply ice and scrape stinger.", "Call doctor if systemic hives form."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Scrape the Stinger Out",
            description: "Look for a stinger. Scrape it off horizontally using a credit card or your fingernail. Do not use tweezers.",
            imagePrompt: "Scraping skin with credit card to remove black stinger sting",
            warning: "Squeezing the stinger with tweezers squeezes the venom sac, injecting more toxin into the skin."
          },
          {
            stepNumber: 2,
            title: "Wash with Soap",
            description: "Clean the sting site with soap and water to wash away surface bacteria.",
            imagePrompt: "Washing arm sting under faucet"
          },
          {
            stepNumber: 3,
            title: "Apply Ice Pack",
            description: "Apply a cold pack wrapped in a cloth for 10 minutes to reduce local pain and restrict swelling.",
            imagePrompt: "Ice cube wrapped in tissue on sting spot"
          },
          {
            stepNumber: 4,
            title: "Soothe the Skin",
            description: "Apply calamine lotion or baking soda paste (baking soda mixed with water) to neutralize local acidity.",
            imagePrompt: "Dabbing pink lotion on skin"
          },
          {
            stepNumber: 5,
            title: "Monitor for 30 Minutes",
            description: "Watch for signs of anaphylaxis (swelling of tongue/lips, difficulty breathing, rash on torso).",
            imagePrompt: "Watching breathing rate"
          }
        ],
        doNots: [
          "Do not squeeze the stinger with tweezers.",
          "Do not scratch the sting area."
        ],
        whenToSeekHelp: [
          "Sting is inside the mouth or throat (swelling can block airway).",
          "Patient has a history of severe allergies to bee venom."
        ],
        estimatedRecovery: "1 - 3 days"
      },
      {
        id: "food-allergy",
        name: "Food Allergy",
        bodyPart: "Digestive / Whole Body",
        severity: "moderate",
        overview: "Immune response triggered by foods (peanuts, shellfish, milk). Can range from mild hives to fatal anaphylaxis.",
        formula: {
          acronym: "E.A.C",
          steps: ["Epinephrine use if throat swells.", "Antihistamine for mild symptoms.", "Call EMS if airways close."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Stop Eating the Food",
            description: "Immediately spit out and remove any suspected food from the mouth.",
            imagePrompt: "Spitting food into tissue"
          },
          {
            stepNumber: 2,
            title: "Check for Throat/Tongue Swelling",
            description: "Ask the patient if their tongue feels thick, throat feels itchy, or if they have difficulty swallowing.",
            imagePrompt: "Checking patient's throat with tongue depressor icon"
          },
          {
            stepNumber: 3,
            title: "Give Antihistamines for Hives",
            description: "If only hives and lip tingling are present, give oral antihistamines.",
            imagePrompt: "Pouring liquid antihistamine onto spoon"
          },
          {
            stepNumber: 4,
            title: "Administer EpiPen if Breathing is Affected",
            description: "If they wheeze, cough, or feel dizzy, inject Epinephrine immediately into the outer thigh.",
            imagePrompt: "Pressing auto-injector into thigh",
            warning: "Do not wait. Food allergies can lead to airway closure in under 10 minutes."
          },
          {
            stepNumber: 5,
            title: "Seek Emergency Care",
            description: "Any severe reaction requires transport to the ER, as a biphasic reaction can occur up to 8 hours later.",
            imagePrompt: "Emergency sign"
          }
        ],
        doNots: [
          "Do not wait for symptoms to resolve on their own.",
          "Do not try to force water or milk down their throat if swallowing is difficult."
        ],
        whenToSeekHelp: [
          "Feeling of tightness in throat, difficulty breathing, or dizziness.",
          "Vomiting, diarrhea, or severe abdominal cramps combined with hives."
        ],
        estimatedRecovery: "12 - 36 hours"
      }
    ]
  },
  {
    id: "head-brain",
    slug: "head-brain",
    name: "Head & Brain",
    icon: "Brain",
    color: "#FF4D4D",
    description: "Head trauma, concussion checks, strokes (FAST protocol), and seizure response procedures.",
    formula: "S.T.O.P",
    formulaExpanded: ["Stay still", "Track symptoms", "Observe", "Protect"],
    types: [
      {
        id: "concussion",
        name: "Concussion",
        bodyPart: "Head / Brain",
        severity: "moderate",
        overview: "A mild traumatic brain injury caused by an impact to the head or body that shakes the brain inside the skull.",
        formula: {
          acronym: "S.T.O.P",
          steps: ["Stay still and rest.", "Track cognitive symptoms.", "Observe for red flags.", "Protect from secondary head impacts."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Rest Immediately",
            description: "Stop the activity, sit down, and keep the head stable. Do not return to sports or activity.",
            imagePrompt: "Person sitting with head resting in hands"
          },
          {
            stepNumber: 2,
            title: "Apply Cold Compress",
            description: "Apply a cold pack wrapped in a cloth to the bump or sore area on the skull for 10 minutes to reduce local bruising.",
            imagePrompt: "Holding ice pack to forehead bump"
          },
          {
            stepNumber: 3,
            title: "Evaluate Cognitive Symptoms",
            description: "Ask simple questions: 'What day is it?', 'Where are we?'. Check for slurred speech or dizziness.",
            imagePrompt: "Doctor talking to conscious patient",
            warning: "A concussion can cause confusion. Do not leave the patient alone to fall asleep immediately."
          },
          {
            stepNumber: 4,
            title: "Observe for Red Flags",
            description: "Watch for worsening symptoms over the next 2-4 hours. Check if they vomit or complain of visual double-vision.",
            imagePrompt: "Watching patient's eyes"
          },
          {
            stepNumber: 5,
            title: "Consult a Medical Professional",
            description: "Take the patient to a clinic or doctor for a full neurological assessment.",
            imagePrompt: "Neurology clinic symbol"
          }
        ],
        doNots: [
          "Do not return to play or work on the same day.",
          "Do not take aspirin or ibuprofen for the first 24 hours (risk of bleeding in brain; acetaminophen is preferred)."
        ],
        whenToSeekHelp: [
          "One pupil is larger than the other.",
          "Repeated vomiting or worsening, severe headache.",
          "Slurred speech, extreme drowsiness, or inability to wake up."
        ],
        estimatedRecovery: "7 - 14 days"
      },
      {
        id: "head-wound",
        name: "Head Wound (Bleeding)",
        bodyPart: "Head / Scalp",
        severity: "moderate",
        overview: "Cuts or lacerations on the scalp. Scalp wounds bleed extremely heavily due to high density of superficial blood vessels.",
        formula: {
          acronym: "S.T.O.P",
          steps: ["Stay still.", "Track blood loss and check for skull fracture.", "Observe consciousness.", "Protect the head from infection."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Wear Protective Gloves",
            description: "Put on gloves. Scalp bleeding will spread blood quickly.",
            imagePrompt: "Wearing nitrile gloves"
          },
          {
            stepNumber: 2,
            title: "Apply Direct pressure",
            description: "Press a sterile pad firmly onto the bleeding wound. Hold continuous pressure for 5-10 minutes.",
            imagePrompt: "Hand pressing gauze firmly on top of patient's head",
            warning: "If you suspect a skull fracture (feel a depression, soft spot, or bone fragments), press around the wound, not directly on it."
          },
          {
            stepNumber: 3,
            title: "Secure with a Bandage",
            description: "Wrap a roller bandage around the forehead and back of skull to hold the pressure pad in place.",
            imagePrompt: "Wrapping bandage around head crown"
          },
          {
            stepNumber: 4,
            title: "Check for Brain Injury",
            description: "Check for dizziness, nausea, confusion, or pupils that react unequally to light.",
            imagePrompt: "Shining penlight into eye"
          },
          {
            stepNumber: 5,
            title: "Seek Medical Dressing",
            description: "Take the patient to emergency care. Scalp cuts frequently require surgical staples or sutures.",
            imagePrompt: "Medical clinic symbol"
          }
        ],
        doNots: [
          "Do not press directly on the wound if you suspect a depressed skull fracture.",
          "Do not wash the head wound under a tap."
        ],
        whenToSeekHelp: [
          "Clear fluid or blood drains from the ears or nose (CSF leak).",
          "The patient loses consciousness, even for a few seconds.",
          "The wound has exposed bone or deep muscle tissue."
        ],
        estimatedRecovery: "1 - 2 weeks"
      },
      {
        id: "stroke",
        name: "Stroke (FAST Protocol)",
        bodyPart: "Brain / Face / Arms",
        severity: "severe",
        overview: "Disruption of blood flow to the brain, caused by a clot (ischemic) or rupture (hemorrhagic). Time is brain cells; act instantly.",
        formula: {
          acronym: "F.A.S.T",
          steps: ["Face dropping (check smile).", "Arm weakness (check raising arms).", "Speech difficulty (check sentence repeat).", "Time to call emergency services."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "F - Face Drooping",
            description: "Ask the person to smile. Check if one side of their face droops or is numb.",
            imagePrompt: "Person smiling showing asymmetric mouth droop"
          },
          {
            stepNumber: 2,
            title: "A - Arm Weakness",
            description: "Ask the person to raise both arms. Check if one arm drifts downward or is weak.",
            imagePrompt: "Person raising arms, left arm drifting down"
          },
          {
            stepNumber: 3,
            title: "S - Speech Difficulty",
            description: "Ask them to repeat a simple sentence like 'The sky is blue'. Check if they slur, struggle, or fail to speak.",
            imagePrompt: "Speech bubble with jagged edges",
            warning: "Speech difficulties can be subtle. Slurred words or jumbled sentences are critical signs."
          },
          {
            stepNumber: 4,
            title: "T - Time to Call 999",
            description: "If they show any of these signs, call EMS immediately. Note the exact time symptoms started.",
            imagePrompt: "Dialing 999 emergency services screen"
          },
          {
            stepNumber: 5,
            title: "Place in Recovery Position (If Drowsy)",
            description: "Lay them flat on their side with head slightly elevated. Do not give them any food, water, or aspirin.",
            imagePrompt: "Stroke patient lying in recovery position",
            warning: "Do NOT give the patient aspirin or water. A stroke can impair swallowing, leading to choking, and if hemorrhagic, aspirin will worsen bleeding."
          }
        ],
        doNots: [
          "Do not give aspirin (can worsen hemorrhagic stroke).",
          "Do not give anything to eat or drink.",
          "Do not wait to see if symptoms improve."
        ],
        whenToSeekHelp: [
          "A stroke represents a major medical emergency. Immediate 999 call is required."
        ],
        estimatedRecovery: "Variable (rehabilitation months)"
      },
      {
        id: "seizure",
        name: "Seizure",
        bodyPart: "Brain / Muscles",
        severity: "moderate",
        overview: "Sudden, uncontrolled electrical disturbance in the brain. Patient may experience muscle convulsions and loss of consciousness.",
        formula: {
          acronym: "S.T.O.P",
          steps: ["Stay still and protect.", "Track duration of fit.", "Observe breathing post-seizure.", "Protect head from hard surfaces."]
        },
        steps: [
          {
            stepNumber: 1,
            title: "Protect the Head",
            description: "Place a folded jacket, pillow, or towel under the patient's head to prevent skull trauma against the ground.",
            imagePrompt: "Placing folded towel under head of convulsing patient",
            warning: "Do NOT hold the person down or try to stop their movements. Do NOT place anything in their mouth."
          },
          {
            stepNumber: 2,
            title: "Clear Surrounding Objects",
            description: "Move hard, sharp, or hot objects away to prevent impact injuries during convulsions.",
            imagePrompt: "Pushing metal chair away from patient"
          },
          {
            stepNumber: 3,
            title: "Time the Seizure",
            description: "Look at your watch and note the start and end time of the active convulsing phase.",
            imagePrompt: "Looking at stopwatch"
          },
          {
            stepNumber: 4,
            title: "Turn to Side (Post-Convulsion)",
            description: "When convulsions stop, gently turn them onto their side into the recovery position to keep airway open and clear fluids.",
            imagePrompt: "Turning unconscious patient onto their side"
          },
          {
            stepNumber: 5,
            title: "Stay with the Patient",
            description: "Talk to them calmly as they wake up. They will be confused, disoriented, and exhausted.",
            imagePrompt: "Kneeling beside patient comforting them"
          }
        ],
        doNots: [
          "Do not put anything in the patient's mouth (contrary to myth, they cannot swallow their tongue, and items cause choking/broken teeth).",
          "Do not restrain their limbs or movements.",
          "Do not give them water until they are fully alert."
        ],
        whenToSeekHelp: [
          "The seizure lasts longer than 5 minutes.",
          "The patient has a second seizure immediately after the first.",
          "The patient is pregnant, diabetic, or injured during the fit."
        ],
        estimatedRecovery: "1 - 2 hours"
      }
    ]
  }
];

module.exports = { firstAidCategories };