<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819344.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2Bjf%2BnGBpwkIMt1wew3A%2BK4gE37w%3D&Expires=1778572619' alt='OCR图片'/></div>

## Sri Lanka Institute of Information Technology Faculty of Computing

<div align="center">

# Dr.Sanvitha Kasthuriarachchi IT2130 - Operating Systems and System Administration Year 02 and Semester 02

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819396.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=mY7CPXBDCFJyVw0JXgl%2BfF%2B4gmM%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_3_1777967819403.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=OM2mReDLJ5SI%2B23YKIDe2rUT6zg%3D&Expires=1778572619' alt='OCR图片'/></div>

Lecture 06

## Protection and Security of the Operating System

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819407.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=6oVMU25M0PdLcs9nfD%2BN4CXe%2BJE%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819412.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=021z19A96i3JyV0RUUVtOds172s%3D&Expires=1778572619' alt='OCR图片'/></div>

## Outline

- Goals of Protection

- The Security Problem

- Reasons for taking Security Measures

- Access Matrix

- Program Threats

- System and Network Threats

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819418.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=bXCL3QYYHorj43pb1f70CgjX5xU%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819423.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=xnh%2F8X%2B%2BtVmy0FCVMx6SH8dE%2FPY%3D&Expires=1778572619' alt='OCR图片'/></div>

## Protection and Security

- Operating System uses two sets of techniques to counter threats to information namely;

- Protection - It involves guarding a user's data and programs against inference by other authorized users of the system.

- Security - It involves guarding of a user's data and programs against interference by external entities. Eg: Unauthorized persons.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819427.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=gVSh81HY9%2FAO98hyMkXZJsV%2FXWY%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819436.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=tx5KsGW9xHc8%2FfKmjoIV6KWVxnk%3D&Expires=1778572619' alt='OCR图片'/></div>

## Facets to Protection of Information

- There are two facets to protection of information

- Secrecy: implies that only authorized users should be able to access information.

- Privacy: implies that information should be used only for the purpose(s) for which it is intended and shared.

- Operating System focuses on guaranteeing secrecy of information and leaves the issues of privacy to the users and their processes.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819440.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=gVH9uOUHMaa4AGT5FBaS77F3da0%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819454.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=f5vMN3rXUVTcdAmNAu0WgmjPJbM%3D&Expires=1778572619' alt='OCR图片'/></div>

## Security and Protection: Policies and Mechanisms

## Security

- Policy: Specify whether a person can become a user of the system.

## Mechanism:

- Add or delete users

- Verify whether a person is an authorized user.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819459.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=9KTWJqHLPQykDlJTMFpTeQisVZg%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819463.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=5Sd9ICDev3PUk04%2BPUnGLIRZDUA%3D&Expires=1778572619' alt='OCR图片'/></div>

## Security and Protection: Policies and Mechanisms

## Protection

- Policy: Specify whether a user can access a specific file.

## Mechanism:

- Set or change protection information of a file.

- Check whether a file can be accessed by a user.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819467.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=QSOIwnNWptg2R8AztXPRho7YXKU%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819473.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=DB%2FgMM1NorKxZXbgvA2%2FQQDpjmo%3D&Expires=1778572619' alt='OCR图片'/></div>

## Why is Security a Problem

- Modern operating systems face security challenges because:

- Multiple users share the same system

- Programs may not be trustworthy

- Systems are connected to networks (Internet)

- Attackers continuously evolve new techniques

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819477.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=k4FOGWVmY%2B43Jhx9h3qGJRpZsxo%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819481.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=qZwSIFZIxK2ZeMV7YU8fCnlHsho%3D&Expires=1778572619' alt='OCR图片'/></div>

## Reasons for taking Security Measures

- To prevent loss of data

- To prevent corruption of data

- To prevent compromise of data

- To prevent theft of data

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819487.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=IxnIx6FXh6QLumdaRzMWVctGKls%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819491.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=19k1V6CBxyPlSxopSAXcb4wvJgg%3D&Expires=1778572619' alt='OCR图片'/></div>

## Authentication

- The goal of authentication is the reasonable assurance that anyone who attempts to access a system or a network is a legitimate user.

- There are 3 Mechanisms:

1 Password

2 Physical token or an artifact

Biometric measure

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819496.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=b822L11FuF4tHcWlq%2F72c0nkGQs%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819500.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=csJ6OijyFy3wC%2F2R7YG8EbrPe6E%3D&Expires=1778572619' alt='OCR图片'/></div>

- Operating System security is built around 3 objectives known as CIA;

- Confidentiality

- Integrity

- Availability

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819507.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=KXjgJy0RrWKdV3hyWSIj5vb8SHM%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819513.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=jmafS8swPUC51LMm4hE8JTmmIXU%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_3_1777967819518.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=GXkHR9pJqxHsO0MWtmtAeUtzV5o%3D&Expires=1778572619' alt='OCR图片'/></div>

## Core Security Principles

- Confidentiality - The information is not disclosed to unauthorized individuals, entities and process.

Eg: If someone sees my computer password while I am logging in, then my password has been compromised, and confidentiality has been breached.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819522.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nxDZz%2FdSDTa0PXBlK9nsaBXUfqc%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819528.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=HgzssKTUxmkLmncSTVlPBC4ZciA%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_3_1777967819532.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=rZhugpgX8IGuXiu0lijN6UX7Nic%3D&Expires=1778572619' alt='OCR图片'/></div>

## Core Security Principles

- Integrity - This ensures that data and system resources are not modified without authorization.

Eg: Only authorized users can modify system files

- Availability - Availability ensures that system resources are accessible when needed.

Eg: CPU time is fairly shared among processes.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819537.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=GJNZg%2F0hOhajk9zlQJK9f6s9IuE%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819542.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Up2Wj75zdV%2B8u2%2FEbMmHkFKi0do%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_3_1777967819548.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=5PHrPgVGkhBDU9vhvhHLvSWvFsc%3D&Expires=1778572619' alt='OCR图片'/></div>

- Security models can be discretionary or mandatory.

- Discretionary: Holders of right can be allowed to transfer them at their discretion.

- Mandatory: Only designated roles are allowed to grant rights.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819552.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=yv%2FeeM%2BYMek%2B4SzqHvT8%2FbkBGIw%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819558.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=LmoOz1aNb9CjLuC30sB4HJirJ3U%3D&Expires=1778572619' alt='OCR图片'/></div>

## Security Policy Vs. Security Model

- Security Policy: Outlines several high-level points:

- How the data is accessed

- The amount of security required and what are the steps when these requirements are not met.

- Security Model: The mechanism to support the security policy. This involves in the design of the security system.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819563.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=eL%2FhKq9rykgaGbAVNP9kS9oQpcc%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819568.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=tpTb5FwN4HrLsy646jen2ZpSR7Q%3D&Expires=1778572619' alt='OCR图片'/></div>

- This consists of three principal components:

- A set of passive objects (files, terminals, devices and other entities)

- A set of active subjects, which may manipulate the objects

- A set of rules governing the manipulation of objects by subjects.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819573.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Xd1E02dvQg7gOUxuM%2BIQ03Or9JY%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819578.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=M7oU%2FHna4E9uvtvsTM5RSy2kl4U%3D&Expires=1778572619' alt='OCR图片'/></div>

- The access matrix is a rectangular array with one row per subject and one column per object.

<table border="1"><tr><td>Objects
Subjects</td><td>File 1</td><td>File 2</td><td>File 3</td></tr><tr><td>User 1</td><td>r,w</td><td>r</td><td>r,w,x</td></tr><tr><td>User 2</td><td>r</td><td>r</td><td>r,w,x</td></tr><tr><td>User 3</td><td>r,w,x</td><td>r,w</td><td>r,w,x</td></tr></table>

- Each cell defines what operations a subject is allowed to perform on an object.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819590.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=SH6EGjLAg%2BdOt2VJ9kVapP44d5g%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819595.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=FLi53HdD5wEiwYyX23zJsVVYKLM%3D&Expires=1778572619' alt='OCR图片'/></div>

## Program Threats

- Program threats occur when a malicious program exploits system vulnerabilities to gain unauthorized access or disrupt system operation.

- There are two types of threats:

- Direct: This is any direct attack on your specific systems, whether from outside hackers or from disgruntled insiders.

- Indirect: This is general random attack, most commonly computer viruses, computer worms and Trojan horses.

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819599.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=p%2BtQj2XxzHg3PFLTMIB4SEzqhS4%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819606.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=m%2BRf42K45%2BsWXXGP9vodWzfHyC4%3D&Expires=1778572619' alt='OCR图片'/></div>

## Common Threats

## 1. Trojan Horse

- A malicious program disguised as a legitimate one

- Performs hidden harmful actions

- Eg: A fake "calculator" that steals passwords

## 2. Trapdoor (Backdoor)

- A hidden entry point in a program

- Bypasses normal authentication

- Eg: Developer leaves a secret login for testing

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819613.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=37XzjkpU1JgKgCv0vfI5K2Kkv84%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819620.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=RosdNg6DW%2Fbn85yvL65DpDQYUck%3D&Expires=1778572619' alt='OCR图片'/></div>

## Common Threats

## 3. Logic Bomb

- Malicious code that activates when a specific condition is met

- Eg: Code deletes files on a specific date

## 4.Virus

- Attaches itself to a legitimate program

- Replicates when the program runs

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819625.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=YwpXeF%2BqdzpJwgjyEy2fxxgL8m4%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819646.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=GjZbPVNxYs74p3SZatcbcCHJ9Fs%3D&Expires=1778572619' alt='OCR图片'/></div>

- There can be file corruptions, system slowdown and data losses

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_3_1777967819659.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=VNwrW0g9qlhJ1%2BjhoCnvuLmY2lI%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_4_1777967819674.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=NifYOZ3JrTqUn8e7HSe80Gr99qU%3D&Expires=1778572619' alt='OCR图片'/></div>

## Common Threats

## 5. Worm

- Self-replicating program

- Spreads without user interaction, often via networks

- These are different from Virus because worms do not need a host program

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819678.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ZL%2BY%2BOA3Py8B2Wk3XqyqZP7NKks%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819686.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=KmYMgR0kGGTEIV5Tob1BRnOIXps%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_3_1777967819692.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=17XxzZMf%2BkW8M329lOCS3dWlicM%3D&Expires=1778572619' alt='OCR图片'/></div>

- Code signing

- Antivirus software

- Sandboxing

- Least privilege execution

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819705.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2FiNcNHe5tHXPH0Q8gXHO8laQL1I%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819712.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=t6lE7126kuk%2BCQ1VneDAN8cKSM4%3D&Expires=1778572619' alt='OCR图片'/></div>

## System and Network Threats

- Threats that target the entire system or network infrastructure rather than individual programs.

- There are different system threats:

## 1. Denial of Service (DoS)

- Makes system resources unavailable

- Overloads CPU, memory, or network

- Eg: Flooding a server with requests

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819717.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=c9Zu9NWgKLMSd6c1TXFPGla5gJw%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819722.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=jrwbN9dYAqHLsLxZhlHG1c0pCWc%3D&Expires=1778572619' alt='OCR图片'/></div>

## System and Network Threats

## 2. Distributed Denial of Service (DDoS)

- DoS attack from multiple machines (botnet)

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819727.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=tFQSq5hyhbL%2Bde6UCUqK3hZFJ38%3D&Expires=1778572619' alt='OCR图片'/></div>

## 3. Spoofing

- Attacker pretends to be a legitimate user or system

- There are two types: IP spoofing and Email spoofing

## 4. Port Scanning

- Scanning open ports to find vulnerabilities

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819736.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=SQwA7oXxikfbbN2ztf5NBAVNbxM%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_3_1777967819742.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ajiwl%2FGhVvBkFfWvEDm9yKbj%2Fko%3D&Expires=1778572619' alt='OCR图片'/></div>

## System and Network Threats

## 5. Man-in-the-Middle (MITM)

- Attacker intercepts communication between two parties

- Eg: Stealing passwords on public Wi-Fi

## Network-Based Malware

- Network worms

- Ransomware

- Spyware

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819747.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=OluLMFlcQvUO6rfyNI5G1vrTNXk%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819751.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=63EpgrvEVG92osivdtz1bwGiH%2BI%3D&Expires=1778572619' alt='OCR图片'/></div>

## OS and Network Defenses

- Firewalls

- Intrusion Detection Systems (IDS)

- Secure protocols (HTTPS, SSH)

- Regular patching and updates

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819756.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Xw9II9GtQA2qoLoICe%2FQmkMteDg%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819760.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Dx7ASshpViOwAcmx4nK%2BAKJyzq8%3D&Expires=1778572619' alt='OCR图片'/></div>

## End of Lecture 6

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819776.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=LiOlR8oYLS7ejEzkmKwWZYWCnmE%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819791.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=CISAj87ceF1ukyK9N2eTjc84wis%3D&Expires=1778572619' alt='OCR图片'/></div>

- Practical: Pipe implementation in C

- Workshop:

- Summary - Protection and Security of the OS

- Discussion of Tutorial 6

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819795.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=9WncpXx1rRA%2Br7HuSpmsoW%2BqwUw%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819801.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=hJolRTcvAFcVyB%2FXhEUdd1Ro0N4%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_1_1777967819806.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=b0uEdgJbbrE5By4ta01r4RI8c3g%3D&Expires=1778572619' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260505155637ca5739f07c0c47ec%2Fcrop_2_1777967819813.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=bJacX50P6vbgJfP3kMYUeoxREA0%3D&Expires=1778572619' alt='OCR图片'/></div>