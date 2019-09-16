//
//  CreateContact.h
//  NativeApp
//
//  Created by Basavaraj km on 9/13/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import <AddressBook/AddressBook.h>
#import <AddressBookUI/AddressBookUI.h>
#import <React/RCTBridgeModule.h>

@interface CreateContact : NSObject <ABNewPersonViewControllerDelegate, RCTBridgeModule>

@end
